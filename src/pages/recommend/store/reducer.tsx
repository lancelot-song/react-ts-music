import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    bannerList :[],
    recommendList :[],
    enterLoading : true,
    scrollConfig : {
        direction : 'vertical',
        bounce:{
            top:true,
            bottom:true
        },
        pullRefresh : {
            threshold : 90,
            stop : 45
        }
    }
});

type TAction = {
    type : string;
    data : object[] | boolean;
}
export default (state = defaultState, action:TAction) => {
    switch(action.type){
        case constants.CHANGE_BANNER_LIST:
            return state.set("bannerList", action.data);
        case constants.CHANGE_RECOMMEND_LIST:
            return state.set('recommendList', action.data);
        case constants.CHANGE_ENTER_LOADING:
            return state.set('enterLoading', action.data);
        default:;
    }
    return state;
}