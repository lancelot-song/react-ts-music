import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import BScroll from 'better-scroll';
import PullRefresh from '../pullRefresh';
import { IProps } from './type';
import { Loading } from '../loading';
import './style.scss';

const ScrollRef: React.FunctionComponent<IProps> = (props, ref) => {
    //存储节点实例
    const [bScroll, setBScroll] = useState();

    //下拉刷新：已下拉距离
    const [pullRefreshOffset, setPullRefreshOffset] = useState(0);

    //下拉刷新：是否在刷新中
    const [isPullRefreshing, setIsPullRefreshing] = useState(false);

    //获取BScroll配置参数
    const { direction, refresh, click, bounceTime, bounce, pullDownRefresh } = props;
    const bounceTop = typeof bounce === 'object' ? bounce.top : !!bounce;
    const bounceBottom = typeof bounce === 'object' ? bounce.top : !!bounce;

    //监听BScroll事件回调
    const { onPullUp, onPullDown, onScroll, onPullRefresh } = props;

    //创建ref钩子
    const scrollContentRef = useRef<HTMLDivElement>(null);

    //创建BScroll
    useEffect(()=>{
        const scroll = new BScroll(scrollContentRef.current as HTMLDivElement, {
            scrollX : direction === 'horizental',
            scrollY : direction === 'vertical',
            probeType : 2,
            click : click,
            pullDownRefresh : pullDownRefresh,
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
                onPullRefresh && pos.y > 0 && setPullRefreshOffset(pos.y);
            })
        }
        //监听下拉刷新触发时进入loading状态 同时 调用父组件传来的onPullRefresh 父组件执行成功后 再回调此组件 移除loading状态
        if( onPullRefresh ){
            scroll.on('pullingDown', () => {
                setIsPullRefreshing(true);
                onPullRefresh(()=>{
                    scroll.finishPullDown();
                    setTimeout(()=>{
                        scroll.refresh();
                        setIsPullRefreshing(false);
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
                { onPullRefresh 
                    && <PullRefresh 
                        isRefreshing={isPullRefreshing}
                        threshold={typeof pullDownRefresh === 'object' && pullDownRefresh.threshold || 90} 
                        offset={pullRefreshOffset} /> }
            </div>
        </div>
    )
}

const Scroll = forwardRef<HTMLDivElement, IProps>(ScrollRef);

Scroll.defaultProps = {
    direction : 'vertical',
    bounceTime : 800,
    click : true,
    bounce : {
        top:true,
        bottom:true
    },
    pullDownRefresh : false,
    refresh : true,
    onPullUp : () => {},
    onPullDown : () => {},
    onScroll : () => {},
    onPullRefresh : () => {}
}
export default React.memo(Scroll);