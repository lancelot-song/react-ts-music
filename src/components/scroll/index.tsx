import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import BScroll from 'better-scroll';
import PullRefresh from '../pullRefresh';
import { IProps } from './type';
import { Loading } from '../loading';
import './style.scss';

const ScrollRef: React.FunctionComponent<IProps> = (props, ref) => {
    //存储节点实例
    const [bScroll, setBScroll] = useState();

    //获取BScroll配置参数
    const { direction, refresh, click, pullLoading, bounceTime, bounceTop, bounceBottom, pullRefresh } = props;

    //监听BScroll事件回调
    const { onPullUp, onPullDown, onScroll, onPullRefresh } = props;

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
            pullDownRefresh : pullRefresh,
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
            scroll.on('touchEnd', (pos)=>{
                if( pos.y > 50 ){
                    onPullDown();
                }
            });
        }
        if( onScroll ){
            scroll.on('scroll', (pos) => {
                onScroll();
            })
        }
        if( onPullRefresh ){
            scroll.on('pullingDown', () => {
                onPullRefresh(()=>{
                    scroll.finishPullDown();
                    setTimeout(()=>{
                        scroll.refresh();
                    }, bounceTime);
                });
            })
        }
        if( refresh ){
            scroll.refresh();
        }
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
    return (
        <div className='ui-scroll-content' ref={scrollContentRef}>
            <div>
                { props.children }
                { onPullRefresh && <PullRefresh /> }
            </div>
        </div>
    )
}

const Scroll = forwardRef<HTMLDivElement, IProps>(ScrollRef);

Scroll.defaultProps = {
    direction : 'vertical',
    bounceTime : 800,
    refresh : true,
    click : true,
    pullLoading : false,
    bounceTop : true,
    bounceBottom : true,
    pullRefresh : false,
    onPullUp : () => {},
    onPullDown : () => {},
    onScroll : () => {},
    onPullRefresh : () => {}
}
export default React.memo(Scroll);