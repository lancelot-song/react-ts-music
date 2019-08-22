/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-22 17:15:59
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
type num = number;
export interface IProps extends RouteComponentProps<{navType : string}>{
    sliderConfig : SwiperOptions;
    sliderComponents : TSliderComponents[];//ReactNode[];
    children : ReactNode;
    loadedComponent : (arg0: TSliderComponents[], arg1: number)=>void;
}