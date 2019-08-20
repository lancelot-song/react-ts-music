/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:14 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 14:46:02
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

export interface IRecommendProps{
    status : boolean;
    bannerList : [];
    menuList : IMenuList[];
    scrollConfig : IScrollConfig;
    bannerConfig : SwiperOptions;
    requestBannerList:()=>void;
    requestBannerListRefresh:(endCallback:()=>void)=>void;
}