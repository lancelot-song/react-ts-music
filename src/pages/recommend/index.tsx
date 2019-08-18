import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import SliderImg from '../../components/sliderImg';
import { IRecommendProps } from './type'
import * as commonAction from '../../store/actionCreators';
import * as recommendAction from './store/actionCreators';
import Scroll from '../../components/scroll';
import './style.scss';


const Recommend:React.FunctionComponent<IRecommendProps> = (props) =>{
    const { bannerList, scrollConfig } = props;

    useEffect(()=>{
        if( !bannerList.length ){
            props.requestBannerList();
        }
    },[]);

    return (
        <div className='ui-content'>
            <Scroll 
                direction='vertical'
                onScroll={()=>forceCheck()}
                onPullRefresh={props.requestBannerListRefresh}
                bounce={scrollConfig.bounce}
                pullDownRefresh={scrollConfig.pullDownRefresh}>
                <SliderImg bannerList={bannerList} />
            </Scroll>
        </div>
    )
}

const mapState = (state:any) => ({
    status : state.getIn(['common','status']),
    bannerList : state.getIn(['recommend','bannerList']).toJS(),
    scrollConfig : state.getIn(['recommend','scrollConfig']).toJS()
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