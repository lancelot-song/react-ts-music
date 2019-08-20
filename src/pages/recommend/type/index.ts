/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:14 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 16:06:50
 */
import React from 'react';
import { SwiperOptions } from 'swiper';
import { IProps as IScrollConfig } from '../../../components/scroll';

//加载状态
export type TEnterLoading = boolean;

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
    status : boolean;
    bannerList : TBannerList[];
    menuList : IMenuList[];
    scrollConfig : IScrollConfig;
    bannerConfig : SwiperOptions;
    requestBannerList:()=>void;
    requestBannerListRefresh:(endCallback:()=>void)=>void;
}