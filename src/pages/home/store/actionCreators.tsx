import * as constants from './constants';
import { Dispatch } from 'redux';
import { requestBannerList, requestRecommendList } from '../../..//api/request';
import * as type from '../type';

export const changeBannerList = (data:type.TBannerList) => ({
    type : constants.CHANGE_BANNER_LIST,
    data 
 });
 export const changeRecommendList = (data:type.TRecommendList) => ({
    type : constants.CHANGE_RECOMMEND_LIST,
    data 
 });
 export const changeEnterList = (data:type.TEnterLoading) => ({
    type : constants.CHANGE_ENTER_LOADING,
    data 
 });


 export const requestBannerlist = () => {
    return (dispatch:Dispatch) => {
       requestBannerList().then((data:type.TBannerResult) => {
           dispatch(changeBannerList(data.banners));
       }).catch(()=>{
           console.log('request banner list error');
       });
    }
}
export const requestRecommendlist = () => {
    return (dispatch:Dispatch) => {
       requestRecommendList().then((data:type.TRecommendResult) => {
           dispatch(changeRecommendList(data.result));
           dispatch(changeEnterList(false));
       }).catch(()=>{
           console.log('request recommend list error');
       });
    }
}