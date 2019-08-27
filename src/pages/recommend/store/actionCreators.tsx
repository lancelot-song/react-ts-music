/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 14:07:20 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-27 16:58:39
 */
import { fromJS } from 'immutable';
import { Dispatch } from 'redux';
import * as constants from './constants';
import { getBannerList, getRecommendMusicSquare } from '../../../api/request';
import * as types from '../type';

export const changeBannerList = (data:types.TBannerList[]) => ({
    type : constants.CHANGE_BANNER_LIST,
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

export const changeMusicSquare = (data:types.TBannerList[]) => ({
    type : constants.CHANGE_MUSIC_SQUARE,
    data : fromJS(data)
});
export const requestMusicSquare = () => {
    return (dispatch:Dispatch) => {
        getRecommendMusicSquare().then((data:any) => {
           dispatch(changeMusicSquare(data.result));
       }).catch((err)=>{
           console.log('request musicSquare list error');
       });
    }
}