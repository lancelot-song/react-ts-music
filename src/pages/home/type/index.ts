/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-29 15:43:32
 */
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SwiperOptions } from 'swiper';
export interface IProps extends RouteComponentProps<{navType : string}>{
    sliderConfig : SwiperOptions;
    sliderComponents : Array<{
        type : string;
        Component : ReactNode;
        loaded : boolean | 'disabled';
    }>;
    children : ReactNode;
}