import React from 'react';
import { fromJS } from 'immutable';
import Loadable from 'react-loadable';
import Loading from '../../../components/loading';


const LoadableMe = Loadable({
    loader : () => import('../../../pages/recommend'),
    loading : () => <Loading scale={1} />
});
const LoadableRecommend = Loadable({
    loader : () => import('../../../pages/recommend'),
    loading : () => <Loading scale={1} />
});
const LoadableVillage = Loadable({
    loader : () => import('../../../pages/recommend'),
    loading : () => <Loading scale={1} />
});
const LoadableVideo = Loadable({
    loader : () => import('../../../pages/recommend'),
    loading : () => <Loading scale={1} />
});

const defaultState = fromJS({
    sliderComponents : [
        <LoadableMe />,
        <LoadableRecommend />,
        <LoadableVillage />,
        <LoadableVideo />
    ],
    sliderConfig : { 
        autoplay : {
            delay : 5000
        }
    }
});

type TAction = {
    type : string;
    data : object[] | boolean;
}
export default (state = defaultState, action:TAction) => {
    return state;
}