/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:22 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-21 15:34:48
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routerPath from '../api/routerPath';
import Home from '../pages/home';
const Routers = () =>{
    return (
        <>
            <Route exact path={routerPath.home.default+'/:navType'} component={ Home } />
            <Redirect to={routerPath.home.recommend} />
        </>
    )
}

export default Routers;