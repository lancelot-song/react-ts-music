import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';

const Routers = () =>{
    return (
        <>
            <Route exact path="/" component={Home}/>
        </>
    )
}

export default Routers;