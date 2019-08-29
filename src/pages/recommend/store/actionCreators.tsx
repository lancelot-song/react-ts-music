/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 14:07:20 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-29 15:30:59
 */
import { fromJS } from 'immutable';
import { Dispatch } from 'redux';
import axios from 'axios';
import * as constants from './constants';
import { getBannerList, getRecommendMusicSquare, getRecommendMusicSheet } from '../../../api/request';
import * as types from '../type';
import { IProps as IColumnVertical } from '../../../components/columns/vertical';

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

export const changeMusicSquare = (data:IColumnVertical[]) => ({
    type : constants.CHANGE_MUSIC_SQUARE,
    data : fromJS(data)
});
export const requestMusicSquare = () => {
    return (dispatch:Dispatch) => {
        getRecommendMusicSquare().then((data:any) => {
           dispatch(changeMusicSquare(data.result));
       }).catch(()=>{
           console.log('request musicSquare list error');
       });
    }
}

export const changeMusicSheet = (data:IColumnVertical[][]) => ({
    type : constants.CHANGE_MUSIC_SHEET,
    data : fromJS(data)
});
export const requestMusicSheet = () => {
    return (dispatch:Dispatch) => {
        axios.all(getRecommendMusicSheet()).then(
            axios.spread((musicSheetSaucer:any, musicSheetSingles:any) => {
                dispatch(changeMusicSheet( [musicSheetSaucer.albums, musicSheetSingles.albums] ));
            })
        ).catch(()=>{
            console.log('request musicSquare list error');
        });
    }
}