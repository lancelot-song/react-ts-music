import { IProps as IScrollConfig } from '../../../components/scroll/type';
//加载状态
export type TEnterLoading = boolean;

export interface IRecommendProps{
    status : boolean;
    bannerList : [];
    scrollConfig : IScrollConfig;
    commonStatusChange:(status:boolean)=>void;
    requestBannerList:()=>void;
    requestBannerListRefresh:(endCallback:()=>void)=>void;
}