/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:16 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-26 16:01:54
 */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import BannerSlider from '../../components/slider';
import { IRecommendProps } from './type'
import * as recommendAction from './store/actionCreators';
import Scroll from '../../components/scroll';
import ColumnVertical from '../../components/columns/vertical';
import { TSliderUpdate } from '../../components/slider';
import './style.scss';

const Recommend:React.FunctionComponent<IRecommendProps> = (props) =>{
    const { bannerList, bannerConfig, scrollConfig, menuList, songSheet } = props;
    const { requestBannerList } = props;
    const BannerSwipeRef = useRef<TSliderUpdate>(null);

    useEffect(()=>{
        if( !bannerList.length ){
            requestBannerList();
        }
    },[]);

    useEffect(()=>{
        BannerSwipeRef.current && BannerSwipeRef.current.update();
    }, [bannerList]);

    const MenuList = () =>{
        return (
            <div className='ui-menu-list'>
                {
                    menuList.map(item=>{
                        return (<Link to={item.url} key={item.title+item.url} className='item'>
                            <div className='icon-group'>
                                <div className='icon-label'>{item.icon}</div>
                            </div>
                            <div className='title'>{ item.title }</div>
                        </Link>)
                    })
                }
            </div>
        )
    }
    const BannerList = () =>(
        <BannerSlider config={ bannerConfig } ref={BannerSwipeRef}>
            <div className='swiper-wrapper'>
            {
                bannerList.map(item => (
                    <div className='swiper-slide' key={item.imageUrl}>
                        <img src={item.imageUrl} alt={item.typeTitle} />
                        <span 
                            className='label' 
                            style={{ 'backgroundColor': item.titleColor }}>{item.typeTitle}</span>
                    </div>
                ))
            }
            </div>
        </BannerSlider>
    )
    return (
        <div className='ui-content'>
            <Scroll 
                direction='vertical'
                onScroll={()=>forceCheck()}
                onPullRefresh={props.requestBannerListRefresh}
                bounce={scrollConfig.bounce}
                click={true}
                pullDownRefresh={scrollConfig.pullDownRefresh}>
                <BannerList />
                <MenuList />
                <ColumnVertical 
                    heading={songSheet.heading} 
                    items={songSheet.items} />
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
                <div>1111111111111</div>
            </Scroll>
        </div>
    )
}
const mapState = (state:any) => ({
    status : state.getIn(['common','status']),
    bannerList : state.getIn(['recommend','bannerList']).toJS(),
    menuList : state.getIn(['recommend','menuList']).toJS(),
    scrollConfig : state.getIn(['recommend','scrollConfig']).toJS(),
    bannerConfig : state.getIn(['recommend','bannerConfig']).toJS(),
    songSheet : state.getIn(['recommend','songSheet']).toJS()
});
const mapProps = (dispatch:any) => ({
    requestBannerList : () =>{
        dispatch( recommendAction.requestBannerList() );
    },
    requestBannerListRefresh : async(refreshCallback:any) =>{
        //伪造 请求数据延迟2秒 看看刷新效果如何
        await new Promise((resolve)=>{
            setTimeout(function(){
                dispatch( recommendAction.requestBannerList() );
                resolve()
            },3000);
        });
        refreshCallback();
    }
});

export default connect(mapState, mapProps)(React.memo(Recommend));