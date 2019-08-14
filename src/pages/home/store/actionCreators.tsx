import { fromJS } from 'immutable';
import { Dispatch } from 'redux';
import * as constants from './constants';
import { getBannerList, getRecommendList } from '../../..//api/request';
import * as type from '../type';

export const changeBannerList = (data:type.TBannerList) => ({
    type : constants.CHANGE_BANNER_LIST,
    data : fromJS(data)
 });
 export const changeRecommendList = (data:type.TRecommendList) => ({
    type : constants.CHANGE_RECOMMEND_LIST,
    data : fromJS(data)
 });
 export const changeEnterList = (data:type.TEnterLoading) => ({
    type : constants.CHANGE_ENTER_LOADING,
    data : fromJS(data)
 });


 export const requestBannerList = () => {
    return (dispatch:Dispatch) => {
       getBannerList().then((data:any) => {
           dispatch(changeBannerList(data.banners));
       }).catch(()=>{
           console.log('request banner list error');
       });
    }
}
export const requestRecommendList = () => {
    return (dispatch:Dispatch) => {
       getRecommendList().then((data:any) => {
           dispatch(changeRecommendList(data.result));
           dispatch(changeEnterList(false));
       }).catch(()=>{
           console.log('request recommend list error');
       });
    }
}