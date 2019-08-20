import React, { useState, useEffect, useRef } from 'react';
import Swiper, { SwiperOptions } from 'swiper';
import Loading from '../loading';
import 'swiper/dist/css/swiper.min.css'
import './style.scss';

export type TListData = {
    imageUrl : string;
    url : string;
    typeTitle : string;
    titleColor : string;
    targetId : number;
    targetType? : number;
    encodeId ? : string;
}
export interface IProps {
    listData : TListData[];
    config? : Partial<SwiperOptions>
}


const SliderImg: React.FunctionComponent<IProps> = (props) => {

    const swiperRef = useRef<HTMLDivElement>(null);

    const [ swiper, setSwiper ] = useState();

    const { listData, config } = props;

    //初始化swiper插件
    useEffect(()=>{
        if(swiperRef.current){
            const initSwiper = new Swiper( swiperRef.current, {
                pagination: {
                    ...config,
                    el: '.swiper-pagination',
                }
            });
            setSwiper(initSwiper);
        }
        return ()=>{
            setSwiper(null);
        }
    },[]);

    //更新swiper
    useEffect(()=>{
        swiper && swiper.update();
    }, [listData]);

    //给外部调用的钩子
    return (
        <div className='ui-swiper-wrap'>
            <div className='swiper-container' ref={swiperRef}>
                { !swiper && <Loading scale={0.4} /> }
                <div className='swiper-wrapper'>
                {
                    listData.map(item => (
                        <div className='swiper-slide' key={item.imageUrl}>
                            <img src={item.imageUrl} alt={item.typeTitle} />
                            <span 
                                className='label' 
                                style={{ 'backgroundColor': item.titleColor }}>{item.typeTitle}</span>
                        </div>
                    ))
                }
                </div>
                <div className="swiper-pagination"></div>
            </div> 
        </div>
    )
}

SliderImg.defaultProps = {
    listData : []
}
export default React.memo(SliderImg);