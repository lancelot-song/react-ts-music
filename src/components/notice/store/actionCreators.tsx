import { SHOW_NOTICE } from './constants';
import { fromJS } from 'immutable';

export const showNotice = (txt:string, showTime:number) =>{
    return {
        type : SHOW_NOTICE,
        data : fromJS({
            isShow: true,
            txt,
            showTime
        })
    }
}