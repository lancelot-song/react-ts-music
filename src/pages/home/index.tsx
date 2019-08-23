/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:05 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-23 14:54:06
 */
import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeSwipe from '../../components/slider';
import routerPath from '../../api/routerPath';
import { IProps } from './type';
import { TSliderGo } from '../../components/slider';
import './style.scss';


const Home:React.FunctionComponent<IProps> = (props) => {
    const { sliderComponents, sliderConfig, match, history } = props;

    //根据url 配置slider组件位置、内容
    const switchRouterTypes = sliderComponents.map(item=>`${item.type}`);
    const initSliderIndex = switchRouterTypes.indexOf(match.params.navType);
    sliderComponents[initSliderIndex]['loaded'] = true;
    const [ loadSliderComponents, setLoadSliderComponents ] = useState(sliderComponents);

    //根据路由变化控制slider加载的组件
    const SliderRef = useRef<TSliderGo>(null);
    useEffect(()=>{
        SliderRef.current && SliderRef.current.go( switchRouterTypes.indexOf(match.params.navType) );
    },[match.params.navType])
    const onSwitchRouter = (swipeIndex:number) =>{
        loadSliderComponents[swipeIndex]['loaded'] = true;
        setLoadSliderComponents(loadSliderComponents);
        history.replace( `${routerPath.home.default}/${switchRouterTypes[swipeIndex]}` );
    }

    const sliderConfigMerge = {
        ...sliderConfig,
        initialSlide : initSliderIndex
    }
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
            {props.children}
            <HomeSwipe
                ref={SliderRef}
                classNames='ui-home-swipe'
                config={sliderConfigMerge}
                onSwitchIndex={onSwitchRouter}> 
                <div className='swiper-wrapper'>
                    {
                        loadSliderComponents.map((Item:any,index:number) => {
                            return (
                                <div className='swiper-slide' key={index}>
                                    { Item.loaded && <Item.Component /> }
                                </div>
                            )
                        })
                    }
                </div>
            </HomeSwipe>
            
        </div>
    )
}

const mapState = (state:any) => ({
    sliderConfig : state.getIn(['home','sliderConfig']).toJS(),
    sliderComponents : state.getIn(['home','sliderComponents']).toJS()
});
export default withRouter(connect(mapState)(React.memo(Home)));