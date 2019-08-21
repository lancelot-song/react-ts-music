/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-21 15:56:32
 */
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SwiperOptions } from 'swiper';

type TParams = {
    navType : string;
}
type TSliderComponents = {
    type : string;
    Component : ReactNode;
    loaded : boolean;
}
export interface IProps extends RouteComponentProps<TParams>{
    sliderConfig : SwiperOptions;
    sliderComponents : TSliderComponents[];//ReactNode[];
    children : ReactNode;
}