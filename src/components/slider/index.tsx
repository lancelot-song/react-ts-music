import React, { useState, useEffect, useRef, useImperativeHandle, ReactNode, forwardRef } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Swiper, { SwiperOptions } from 'swiper';
import Loading from '../loading';
import 'swiper/dist/css/swiper.min.css'
import './style.scss';

export interface IProps{
    config : Partial<SwiperOptions>;
    classNames ? : string;
    children? : ReactNode;
    switchRouter? : string[];
}


const SliderImg: React.FunctionComponent<IProps> = (props, ref) => {

    const swiperRef = useRef<HTMLDivElement>(null);

    const [ swiper, setSwiper ] = useState();

    const { config, children, classNames, switchRouter } = props;

    //初始化swiper插件
    useEffect(()=>{
        if(swiperRef.current){
            const initSwiper = new Swiper( swiperRef.current, {
                ...config
            });
            if(switchRouter){
                initSwiper.on('slideChange', function(){
                    console.log(props);
                    console.log(initSwiper.activeIndex);
                });
            }
            setSwiper(initSwiper);
        }
        return ()=>{
            setSwiper(null);
        }
    },[]);

    
    //给外部调用的钩子
    useImperativeHandle(ref, ()=>({
        update(){
            swiper && swiper.update();
        },
        switchRouter(){
            swiper && swiper.update();
        }
    }));

    //更新swiper
    // useEffect(()=>{
    //     swiper && swiper.update();
    // }, [listData]);
    console.log(children)
    //给外部调用的钩子
    return (
        <div className={`ui-swiper-wrap ${classNames}`}>
            <div className='swiper-container' ref={swiperRef}>
                { !swiper && <Loading scale={0.4} /> }
                { children }
                { 
                    config.pagination && 
                    typeof config.pagination.el === 'string' && 
                    <div className={`swiper-pagination ${config.pagination.el.substr(1)}`}></div>
                }
            </div> 
        </div>
    )
}


const Slider = forwardRef<HTMLDivElement, IProps>(SliderImg);
export default React.memo(Slider);