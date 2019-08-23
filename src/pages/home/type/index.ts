/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-23 17:49:44
 */
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SwiperOptions } from 'swiper';

export type TAction = {
    type : string;
    data : object[] | boolean;
}
export type TSliderComponents = {
    type : string;
    Component : ReactNode;
    loaded : boolean | 'disabled';
}
export interface IProps extends RouteComponentProps<{navType : string}>{
    sliderConfig : SwiperOptions;
    sliderComponents : TSliderComponents[];
    children : ReactNode;
}