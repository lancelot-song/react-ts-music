//加载状态
export type TEnterLoading = boolean;

//首屏轮播
export type TBanner = {
    encodeId : string;
    imageUrl : string;
    targetId : number;
    targetType : number;
    titleColor : string;
    typeTitle : string;
    url? : string;
    video : string;
}
export type TBannerList = TBanner[];
export type TBannerResult = {
    code : number;
    banners: TBannerList;
}

//推荐列表
export type TRecommend = {
    encodeId : string;
    imageUrl : string;
    targetId : number;
    targetType : number;
    titleColor : string;
    typeTitle : string;
    url? : string;
    video? : string;
}
export type TRecommendList = TRecommend[];
export type TRecommendResult = {
    category:number;
    code : number;
    hasTaste:boolean;
    result : TRecommendList
}


export interface IRecommendProps{
    status : boolean;
    bannerList : TBannerList;
    commonStatusChange:(status:boolean)=>void;
    requestBannerList:()=>void;
}