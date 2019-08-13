import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    bannerList :[],
    recommendList :[],
    enterLoading : true
});

type TAction = {
    type : string;
    data : object[] | boolean;
}
export default (state = defaultState, action:TAction) => {
    switch(action.type){
        case constants.CHANGE_BANNER_LIST:
            state.setIn(['bannerList'], action.data);
            break;
        case constants.CHANGE_RECOMMEND_LIST:
            state.setIn(['recommendList'], action.data);
            break;
        case constants.CHANGE_ENTER_LOADING:
            state.setIn(['enterLoading'], action.data);
            break;
        default:;
    }
    return state;
}