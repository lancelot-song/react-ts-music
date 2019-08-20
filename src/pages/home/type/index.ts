/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 15:48:10
 */
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SwiperOptions } from 'swiper';

export interface IProps extends RouteComponentProps{
    sliderConfig : SwiperOptions;
    sliderComponents : ReactNode[];
    children : ReactNode;
}