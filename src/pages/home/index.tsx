import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { IHomeProps } from './type'
import * as commonAction from '../../store/actionCreators';
import './style.scss';

const Home = (props:IHomeProps) => {

    return (
        <div className='ui-app'>
                <div className='ui-hd'>
                    <Link to='/menu' className='btn-menu-switch'></Link>
                    <div className='ui-nav'>
                        <NavLink to='/me' className='link' activeClassName='actived'>我的</NavLink>
                        <NavLink to='/recommend' className='link' activeClassName='actived'>发现</NavLink>
                        <NavLink to='/village' className='link' activeClassName='actived'>云村</NavLink>
                        <NavLink to='/video' className='link' activeClassName='actived'>视频</NavLink>
                    </div>
                    <Link to='/search' className='btn-search'></Link>
                </div>
                <div className='ui-menu'></div>
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