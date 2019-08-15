import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Home from '../pages/home';
import { Loading } from '../components/loading';

const LoadableRecommend = Loadable({
    loader : () => import('../pages/recommend'),
    loading : Loading
});

const Routers = () =>{
    return (
        <Home>
            <Route path="/recommend" component={LoadableRecommend} />
            <Redirect to="/recommend" />
        </Home>
    )
}

export default Routers;