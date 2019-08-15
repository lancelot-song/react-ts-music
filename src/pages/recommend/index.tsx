import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import { IRecommendProps } from './type'
import * as commonAction from '../../store/actionCreators';
import * as recommendAction from './store/actionCreators';
import Scroll from '../../components/scroll';


const Recommend= (props:IRecommendProps) =>{
    const { bannerList } = props;

    const commonStatusChange = () =>{
        props.commonStatusChange(!props.status);
    }

    useEffect(()=>{
        if( !bannerList.length ){
            props.requestBannerList();
        }
    },[]);

    return (
        <div className='ui-content'>
            <Scroll 
                direction='vertical'
                bounceBottom={true}
                bounceTop={true}
                onScroll={()=>forceCheck()}
                onPullUp={()=>{}}
                onPullDown={()=>{}}
                pullDownLoading={true}
                pullUpLoading={true}>
                <div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                </div>
            </Scroll>
        </div>
    )
}

const mapState = (state:any) => ({
    status : state.getIn(['common','status']),
    bannerList : state.getIn(['recommend','bannerList']).toJS()
});
const mapProps = (dispatch:any) => ({
    commonStatusChange : (status:boolean) =>{
        dispatch( commonAction.commonStatusChange(status) );
    },
    requestBannerList : () =>{
        dispatch( recommendAction.requestBannerList() );
    }
});

export default connect(mapState, mapProps)(React.memo(Recommend));