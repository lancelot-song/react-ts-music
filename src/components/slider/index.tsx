import React, { useState, useEffect, useRef, useImperativeHandle, ReactNode, forwardRef, FunctionComponent } from 'react';
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

const SliderImg: FunctionComponent<IProps> = (props, ref) => {

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
        }
        // switchRouter(){
        //     swiper && swiper.update();
        // }
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


interface IForwardRef{
    update?(): void;
    switchRouter?(): void
}
const Slider = forwardRef<IForwardRef, IProps>(SliderImg);
export default React.memo(Slider);