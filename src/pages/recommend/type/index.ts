/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:14 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-26 17:06:54
 */
import React from 'react';
import { SwiperOptions } from 'swiper';
import { IProps as IScrollConfig } from '../../../components/scroll';
import { IProps as IColumnVertical } from '../../../components/columns/vertical';

//推荐菜单列表
export interface IMenuList {
    title : string;
    icon : React.ReactNode,
    url : string;
}
//广告位列表
export type TBannerList = {
    imageUrl : string;
    url : string;
    typeTitle : string;
    titleColor : string;
    targetId : number;
    targetType? : number;
    encodeId ? : string;
}
export interface IRecommendProps{
    scrollConfig : IScrollConfig;
    bannerConfig : SwiperOptions;
    bannerList : TBannerList[];
    menuList : IMenuList[];
    songSheet:IColumnVertical;
    requestBannerList:()=>void;
    requestBannerListRefresh:(endCallback:()=>void)=>void;
}