/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:22 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-23 15:04:40
 */
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import routerPath from '../api/routerPath';
import Home from '../pages/home';
const Routers = () =>{
    return (
        <BrowserRouter basename="/html/music">
            <Switch>
                <Route path={routerPath.home.default+'/:navType'} render={()=>(
                    <Home>
                        <Switch>
                            <Route path={routerPath.home.player} render={()=>(
                                <div>abc</div>
                            )}/>
                            <Redirect to={routerPath.home.recommend} />
                        </Switch>
                    </Home>
                )}>
                </Route>
                <Redirect to={routerPath.home.recommend} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers;