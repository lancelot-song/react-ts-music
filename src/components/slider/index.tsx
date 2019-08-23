import React, { useState, useEffect, useRef, useImperativeHandle, ReactNode, forwardRef, RefForwardingComponent } from 'react';
import Swiper, { SwiperOptions } from 'swiper';
import Loading from '../loading';
import 'swiper/dist/css/swiper.min.css'
import './style.scss';

export interface IProps{
    config : Partial<SwiperOptions>;
    classNames ? : string;
    children? : ReactNode;
    onSwitchIndex? : (index:number)=>void; 
}
export type TSliderUpdate = {
    update(): void;
}
export type TSliderGo = {
    go: (index:number)=>void
}
export type TSliderRef = Partial<TSliderUpdate> & Partial<TSliderGo>;

const Slider: RefForwardingComponent<TSliderRef,IProps> = (props, ref) => {

    const swiperRef = useRef<HTMLDivElement>(null);

    const [ swiper, setSwiper ] = useState();

    const { config, children, classNames, onSwitchIndex } = props;

    //初始化swiper插件
    useEffect(()=>{
        if(swiperRef.current){
            const initSwiper = new Swiper( swiperRef.current, {
                ...config
            });
            if(onSwitchIndex){
                initSwiper.on('slideChange', function(){
                    onSwitchIndex( initSwiper.activeIndex );
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
        go(index){
            swiper && swiper.off('slideChange');
            swiper && swiper.slideTo(index);
            if(onSwitchIndex && swiper){
                swiper.on('slideChange', function(){
                    onSwitchIndex( swiper.activeIndex );
                });
            }
        }
    }));

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

export default React.memo(forwardRef(Slider));