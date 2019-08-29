
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import * as constants from './constants';
import { reducer as recommendReducer } from '../pages/recommend/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as noticeReducer } from '../components/notice/store';
 
const commonState = fromJS({
    status : false
});

type commonAction = {
    type : string;
    status : boolean;
}

const commonReducer = (state = commonState, action:commonAction) => {
    switch(action.type){
        case constants.COMMON_STATUS :
            return state.setIn(['status'], action.status);
        default:;
    }
    return state;
}

const rootReducer = combineReducers({
    common : commonReducer,
    home : homeReducer,
    recommend : recommendReducer,
    notice : noticeReducer
});

export default rootReducer;