import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import propTypes from 'prop-types';
import BScroll from 'better-scroll';
import { IProps } from './type';
import { Loading } from '../loading';
import './style.scss';

const ScrollRef: React.FunctionComponent<IProps> = (props, ref) => {
    //存储节点实例
    const [bScroll, setBScroll] = useState();

    //获取BScroll配置参数
    const { direction, refresh, click, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;

    //监听BScroll事件回调
    const { onPullUp, onPullDown, onScroll } = props;

    //创建ref钩子
    const scrollContentRef = useRef<HTMLDivElement>(null);

    //创建BScroll
    useEffect(()=>{

        //实例化BScroll 并存储起来 防止多次执行
        const scroll = new BScroll(scrollContentRef.current as HTMLDivElement, {
            scrollX : direction === 'horizental',
            scrollY : direction === 'vertical',
            probeType : 2,
            click : click,
            bounce : {
                top : bounceTop,
                bottom : bounceBottom
            }
        });
        setBScroll(scroll);

        //监听滚动事件
        if( onPullUp ){
            scroll.on('scrollEnd', ()=>{
                if( scroll.y <= scroll.maxScrollY + 100 ){
                    onPullUp();
                }
            });
        }
        if( onPullDown ){
            scroll.on('touchEnd', (pos: { y: number; })=>{
                if( pos.y > 50 ){
                    onPullDown();
                }
            });
        }
        if( onScroll ){
            scroll.on('scroll', (scroll2: any) => {
                console.log(scroll);
                onScroll();
            })
        }
        if( refresh ){
            scroll.refresh();
        }
        console.log(scroll);
        return ()=>{
            scroll.destroy();
            setBScroll(null);
        }
    },[]);
    //给外部调用的钩子
    useImperativeHandle(ref, ()=>({
        refresh(){
            if(bScroll){
                bScroll.refresh();
                bScroll.scrollTop(0, 0);
            }
        }
    }));
    const showPullUpLoading = pullUpLoading ? { display : 'block' } : { display : 'none' };
    const showPullDownLoading = pullDownLoading ? { display : 'block' } : { display : 'none' };
    return (
        <div className='ui-scroll-content' ref={scrollContentRef}>
            { props.children }
            <div className='ui-pull-up' style={ showPullUpLoading }><Loading /></div>
            <div className='ui-pull-down' style={ showPullDownLoading }><Loading /></div>
        </div>
    )
}

const Scroll = forwardRef<HTMLDivElement, IProps>(ScrollRef);

Scroll.defaultProps = {
    direction : 'vertical',
    refresh : true,
    click : true,
    pullUpLoading : false,
    pullDownLoading : false,
    bounceTop : true,
    bounceBottom : true,
    onPullUp : () => {},
    onPullDown : () => {},
    onScroll : () => {}
}
export default React.memo(Scroll);