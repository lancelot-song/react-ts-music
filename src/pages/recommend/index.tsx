/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:16 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-19 17:03:19
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import BannerSlider from '../../components/slider';
import { IRecommendProps } from './type'
import * as recommendAction from './store/actionCreators';
import Scroll from '../../components/scroll';
import './style.scss';

const Recommend:React.FunctionComponent<IRecommendProps> = (props) =>{
    const { bannerList, bannerConfig, scrollConfig, menuList } = props;

    useEffect(()=>{
        if( !bannerList.length ){
            props.requestBannerList();
        }
    },[]);

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

    return (
        <div className='ui-content'>
            <Scroll 
                direction='vertical'
                onScroll={()=>forceCheck()}
                onPullRefresh={props.requestBannerListRefresh}
                bounce={scrollConfig.bounce}
                pullDownRefresh={scrollConfig.pullDownRefresh}>
                <BannerSlider listData={bannerList} config={ bannerConfig }/>
                <MenuList />
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
    bannerConfig : state.getIn(['recommend','bannerConfig']).toJS()
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