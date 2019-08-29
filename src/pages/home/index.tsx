/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:05 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-29 16:17:16
 */
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeSwipe from '../../components/slider';
import Notice from '../../components/notice';
import routerPath from '../../api/routerPath';
import { IProps } from './type';
import { TSliderGo } from '../../components/slider';
import './style.scss';


const Home:React.FC<IProps> = (props) => {
    const { sliderComponents, sliderConfig, match, history } = props;
    
    //获得模板类型 初始化位置
    const [ switchRouterTypes ] = useState(()=>sliderComponents.map(item=>`${item.type}`));
    const initSliderIndex = switchRouterTypes.indexOf(match.params.navType);

    //获得slider初始参数配置
    const [ sliderConfigMerge ] = useState(()=>({
        ...sliderConfig,
        initialSlide : initSliderIndex
    }));

    //每次url改变后重新渲染数据
    const renderSliderComponents = useMemo(()=>{
        console.log("???")
        sliderComponents[initSliderIndex]['loaded'] = true;
        return sliderComponents.map((Item:any,index:number)=>(
            <div className='swiper-slide' key={index}>
                { Item.loaded && <Item.Component /> }
            </div>
        ))
    },[initSliderIndex, sliderComponents]);

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
            <Notice />
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

export default withRouter(connect(mapState)(React.memo(Home)));