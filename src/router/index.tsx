/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:22 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 14:48:11
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import routerPath from '../api/routerPath';
import Home from '../pages/home';
import Loading from '../components/loading';

const LoadableRecommend = Loadable({
    loader : () => import('../pages/recommend'),
    loading : () => <Loading scale={1} />
});

const Routers = () =>{
    return (
        <>
            <Route path={routerPath.home.default} render={(props)=>(
                <Home>
                    <Route path={routerPath.home.recommend} component={LoadableRecommend} />
                    <Redirect to={routerPath.home.recommend} />
                </Home>
            )} />
            <Redirect to={routerPath.home.recommend} />
        </>
    )
}

export default Routers;