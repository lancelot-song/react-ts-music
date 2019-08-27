import { axiosIntance } from './config';
import { AxiosPromise } from 'axios';

export const getBannerList = ():AxiosPromise =>{
    return axiosIntance.get('/banner');
}
export const getRecommendList = ():AxiosPromise =>{
    return axiosIntance.get('/personalized?limit=6');
}
export const getRecommendMusicSquare = ():AxiosPromise =>{
    return axiosIntance.get('/personalized?limit=9');
}