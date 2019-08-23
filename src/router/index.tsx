/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:22 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-23 17:31:00
 */
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import routerPath from '../api/routerPath';
import Home from '../pages/home';
const Routers = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routerPath.home.default+'/:navType'} render={()=>(
                    <Home>
                        <Switch>
                            <Route path={routerPath.home.player} render={()=>(
                                <div>abc</div>
                            )}/>
                        </Switch>
                    </Home>
                )} />
                <Redirect to={routerPath.home.recommend} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers;