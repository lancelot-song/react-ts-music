import { axiosIntance } from './config';

export const getBannerList = () =>{
    return axiosIntance.get('/banner');
}
export const getRecommendList = () =>{
    return axiosIntance.get('/personalized');
}