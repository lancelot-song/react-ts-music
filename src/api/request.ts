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
export const getRecommendMusicSheet = ():AxiosPromise[] =>{
    return [ 
        axiosIntance.get('/top/album?limit=3'),
        axiosIntance.get('/top/album?limit=3&offset=3')//找不到符合场景的新歌api 先请求新碟
    ]
}