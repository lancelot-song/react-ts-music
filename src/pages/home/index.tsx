/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:05 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-22 17:44:31
 */
import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeSwipe from '../../components/slider';
import routerPath from '../../api/routerPath';
import * as homeAction from './store/actionCreators';
import { IProps } from './type'
import './style.scss';

const Home:React.FunctionComponent<IProps> = (props) => {
    const { sliderComponents, sliderConfig, match, history, loadedComponent } = props;
    const HomeSwipeRef = useRef(null);
    const switchRouterAry = sliderComponents.map(item=>`${item.type}`);
    const onSwitchRouter = (swipeIndex:number) =>{
        loadedComponent( sliderComponents, swipeIndex );
        history.push( `${routerPath.home.default}/${switchRouterAry[swipeIndex]}` );
    }
    const [ sliderConfigMerge, setSliderConfigMerge ] = useState({
        ...sliderConfig,
        initialSlide : switchRouterAry.indexOf(match.params.navType)
    });
    
    useEffect(() => {
        loadedComponent( sliderComponents, switchRouterAry.indexOf(match.params.navType) );
    }, []);
    return (
        <div className='ui-app'>
            <div className='ui-hd'>
                <Link to='/menu' className='btn-menu-switch'></Link>
                <div className='ui-nav'>
                    <NavLink to={routerPath.home.me} className='link' activeClassName='actived'>我的</NavLink>
                    <NavLink to={routerPath.home.recommend} className='link' activeClassName='actived'>发现</NavLink>
                    <NavLink to={routerPath.home.village} className='link' activeClassName='actived'>云村</NavLink>
                    <NavLink to={routerPath.home.video} className='link' activeClassName='actived'>视频</NavLink>
                </div>
                <Link to='/search' className='btn-search'></Link>
            </div>
            <HomeSwipe
                ref={HomeSwipeRef}
                classNames='ui-home-swipe'
                config={sliderConfigMerge}
                onSwitchIndex={onSwitchRouter}> 
                <div className='swiper-wrapper'>
                    {
                        sliderComponents.map((Item:any,index:number) => {
                            return (
                                <div className='swiper-slide' key={index}>
                                    { Item.loaded && <Item.Component />}
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
const mapDispatch = (dispatch:any) => ({
    loadedComponent(components:any, loadedIndex:number){
        components[loadedIndex]['loaded'] = true 
        dispatch( homeAction.loadedComponent(components))
    }
})
export default withRouter(connect(mapState, mapDispatch)(React.memo(Home)));