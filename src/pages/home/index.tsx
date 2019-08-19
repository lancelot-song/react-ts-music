/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:05 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-19 16:42:56
 */
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { IHomeProps } from './type'
import routerPath from '../../api/routerPath';
import * as commonAction from '../../store/actionCreators';
import './style.scss';

const Home:React.FunctionComponent<IHomeProps> = (props) => {

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
                { props.children }
        </div>
    )
}

const mapState = (state:any) => ({
    status : state.getIn(['common','status'])
});
const mapProps = (dispatch:any) => ({
    commonStatusChange : (status:boolean) =>{
        dispatch( commonAction.commonStatusChange(status) );
    }
});

export default connect(mapState, mapProps)(Home);