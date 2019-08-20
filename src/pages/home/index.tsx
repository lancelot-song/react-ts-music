/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:05 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 17:32:53
 */
import React, { useRef } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeSwipe from '../../components/slider';
import routerPath from '../../api/routerPath';
import * as commonAction from '../../store/actionCreators';
import { IProps } from './type'
import './style.scss';

const Home:React.FunctionComponent<IProps> = (props) => {
    const { sliderComponents, sliderConfig } = props;
    const HomeSwipeRef = useRef(null);
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
                config={sliderConfig} > 
                <div className='swiper-wrapper'>
                    {
                        sliderComponents.map((Item:any,index:number) => (
                            <div className='swiper-slide' key={index}><Item /></div>
                        ))
                    }
                </div>
            </HomeSwipe>
            
        </div>
    )
}

const mapState = (state:any) => ({
    status : state.getIn(['common','status']),
    sliderConfig : state.getIn(['home','sliderConfig']).toJS(),
    sliderComponents : state.getIn(['home','sliderComponents']).toJS()
});
const mapProps = (dispatch:any) => ({
    commonStatusChange : (status:boolean) =>{
        dispatch( commonAction.commonStatusChange(status) );
    }
});

export default withRouter(connect(mapState, mapProps)(Home));