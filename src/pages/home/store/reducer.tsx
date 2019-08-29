import React from 'react';
import { fromJS } from 'immutable';
import Loadable from 'react-loadable';
import Loading from '../../../components/loading';
//import * as constants from './constants';

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
        {
            type : 'me',
            Component : LoadableMe,
            loaded : false
        },
        {
            type : 'recommend',
            Component : LoadableRecommend,
            loaded : false
        },
        {
            type : 'village',
            Component : LoadableVillage,
            loaded : false
        },
        {
            type : 'video',
            Component : LoadableVideo,
            loaded : false
        }
    ],
    sliderConfig : { 
        autoplay : false,
        initialSlide : 1
    }
});
type TAction = {
    type : string;
    data : object[] | boolean;
}
export default (state = defaultState, action:TAction) => {
    return state;
}