/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-26 15:04:29
 */
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SwiperOptions } from 'swiper';

export type TAction = {
    type : string;
    data : object[] | boolean;
}
export interface IProps extends RouteComponentProps<{navType : string}>{
    sliderConfig : SwiperOptions;
    sliderComponents : Array<{
        type : string;
        Component : ReactNode;
        loaded : boolean | 'disabled';
    }>;
    children : ReactNode;
}