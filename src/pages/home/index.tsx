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
    
    //根据url 配置slider组件位置、内容
    const switchRouterTypes = sliderComponents.map(item=>`${item.type}`);
    const initSliderIndex = switchRouterTypes.indexOf(match.params.navType);

    //获得slider初始参数配置
    const sliderConfigMerge = {
        ...sliderConfig,
        initialSlide : initSliderIndex
    }

    //借用useState存储状态的特性 每次切换路由 都通过修改useState的数组 实现前一次修改的状态不丢失
    const [ saveSliderComponent, setSaveSliderComponent ] = useState(sliderComponents);
    const renderSlider = saveSliderComponent.map((item:any,index:number) => {
        if(index === initSliderIndex){
            item.loaded = true;
        }
        return item;
    });

    //根据路由变化控制slider加载的组件
    const SliderRef = useRef<TSliderGo>(null);
    const onSwitchRouter = (swipeIndex:number) =>{
        history.replace( `${routerPath.home.default}/${switchRouterTypes[swipeIndex]}` );
    }
    useEffect(()=>{
        SliderRef.current && SliderRef.current.go( switchRouterTypes.indexOf(match.params.navType) );
    },[match.params.navType]);
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
                <div className='swiper-wrapper'>
                { 
                    renderSlider.map((Item:any,index:number) => {
                        return (
                            <div className='swiper-slide' key={index}>
                                { Item.loaded && <Item.Component /> }
                            </div>
                        )
                    })
                 }
                 </div>
            </HomeSwipe>
            {props.children}
        </div>
    )
}

const mapState = (state:any) => ({
    sliderConfig : state.getIn(['home','sliderConfig']).toJS(),
    sliderComponents : state.getIn(['home','sliderComponents']).toJS()
});
export default withRouter(connect(mapState)(React.memo(Home, (prevProps, nextProps) => {
    if(prevProps.match.params.navType !== nextProps.match.params.navType){
        return false;
    }
    return true;
})));