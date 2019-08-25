/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:05 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-23 17:49:45
 */
import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeSwipe from '../../components/slider';
import routerPath from '../../api/routerPath';
import { IProps } from './type';
import { TSliderGo } from '../../components/slider';
import './style.scss';


const Home:React.FC<IProps> = (props) => {
    const { sliderComponents, sliderConfig, match, history } = props;
    
    //获得模板类型 初始化位置
    const [ switchRouterTypes, setSwitchRouterTypes ] = useState(()=>sliderComponents.map(item=>`${item.type}`));
    const initSliderIndex = switchRouterTypes.indexOf(match.params.navType);

    //获得slider初始参数配置
    const [ sliderConfigMerge, setSliderConfig ] = useState(()=>({
        ...sliderConfig,
        initialSlide : initSliderIndex
    }));

    //获得一个新的sliderComponents对象，此后渲染修改copy后的对象，避免直接修改props
    const [ copySliderComponents, setSaveSliderComponents ] = useState(()=>(
        sliderComponents.map(item => Object.assign({}, item))
    ));

    //每次url改变后重新渲染数据
    copySliderComponents[initSliderIndex]['loaded'] = true;
    const renderSliderComponents = copySliderComponents.map((Item:any,index:number) => (
            <div className='swiper-slide' key={index}>
                { Item.loaded && <Item.Component /> }
            </div>
    ));

    //根据路由 || slider的改变 动态渲染组件
    const SliderRef = useRef<TSliderGo>(null);
    const onSwitchRouter = (swipeIndex:number) =>{
        history.replace( `${routerPath.home.default}/${switchRouterTypes[swipeIndex]}` );
    }
    useEffect(()=>{
        SliderRef.current && SliderRef.current.go( switchRouterTypes.indexOf(match.params.navType) );
    });
    return (
        <div className='ui-app'>
            <div className='ui-hd'>
                <Link to='/menu' className='btn-menu-switch'></Link>
                <div className='ui-nav'>
                    <NavLink to={routerPath.home.me} className='link' replace activeClassName='actived'>我的</NavLink>
                    <NavLink to={routerPath.home.recommend} className='link' replace activeClassName='actived'>发现</NavLink>
                    <NavLink to={routerPath.home.village} className='link' replace activeClassName='actived'>云村</NavLink>
                    <NavLink to={routerPath.home.video} className='link' replace activeClassName='actived'>视频</NavLink>
                </div>
                <Link to='/search' className='btn-search'></Link>
            </div>
            <HomeSwipe
                ref={SliderRef}
                classNames='ui-home-swipe'
                config={sliderConfigMerge}
                onSwitchIndex={onSwitchRouter}> 
                <div className='swiper-wrapper'>{ renderSliderComponents }</div>
            </HomeSwipe>
            {props.children}
        </div>
    )
}

const mapState = (state:any) => ({
    sliderConfig : state.getIn(['home','sliderConfig']).toJS(),
    sliderComponents : state.getIn(['home','sliderComponents']).toJS()
});
export default withRouter(connect(mapState)(React.memo(Home,(prevProps, nextProps)=>{
    //只允许url改变重新渲染
    return prevProps.match.params.navType!==nextProps.match.params.navType ? false : true;
})));