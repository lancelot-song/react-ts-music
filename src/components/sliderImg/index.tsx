import React, { useState, useEffect } from 'react';
import Swiper,{SwiperOptions} from 'swiper';
import { IProps } from './type';
import 'swiper/dist/css/swiper.min.css'
import './style.scss';

const SliderImg: React.FunctionComponent<IProps> = (props) => {
    const { bannerList } = props;
    //给外部调用的钩子
    return (
        <div className='ui-slider-img-wrap'>
            <div className="slider-container">
                <div className="swiper-wrapper">
                {/* {
                    bannerList.map(item => {
                    return (
                        <div className="swiper-slide" key={item.imageUrl}>
                        <div className="slider-nav">
                            <img src={item.imageUrl} width="100%" height="100%" alt="推荐" />
                        </div>
                        </div>
                    );
                    })
                } */}
                </div>
                <div className="swiper-pagination"></div>
            </div> 
        </div>
    )
}

SliderImg.defaultProps = {
    bannerList : []
}
export default React.memo(SliderImg);