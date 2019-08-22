import { fromJS } from 'immutable';
import * as constants from './constants';

export const loadedComponent = (data:any) => {
    console.log(data);
    return {
        type : constants.HOME_LOADED,
        data : fromJS(data)
    }
}