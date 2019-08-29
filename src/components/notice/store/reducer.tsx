import { fromJS } from 'immutable';
import { SHOW_NOTICE } from './constants';

const defaultState = fromJS({
    isShow : false,
    txt : '',
    showTime : 2000
});
export default (state = defaultState, action:any) => {
    switch(action.type){
        case SHOW_NOTICE :
            return action.data;
        default:;
    }
    return state;
}