/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-23 15:06:11
 */
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SwiperOptions } from 'swiper';

export type TAction = {
    type : string;
    data : object[] | boolean;
}
type TSliderComponents = {
    type : string;
    Component : ReactNode;
    loaded : boolean;
}
export interface IProps extends RouteComponentProps<{navType : string}>{
    sliderConfig : SwiperOptions;
    sliderComponents : TSliderComponents[];
    children : ReactNode;
}