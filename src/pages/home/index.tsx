import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IHomeProps } from './type'
import * as commonAction from '../../store/actionCreators';
import * as homeAction from './store/actionCreators';


function Home(props:IHomeProps){
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
        <div className='App'>
                <ul>
                    {
                        bannerList.map(item=>{
                            return (
                                <li key={item.targetId}>{item.targetId}</li>
                            )
                        })
                    }
                </ul>
                <header className="App-header">
                    <p onClick={commonStatusChange}>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </header>
        </div>
    )
}

const mapState = (state:any) => ({
    status : state.getIn(['common','status']),
    bannerList : state.getIn(['home','bannerList']).toJS()
});
const mapProps = (dispatch:any) => ({
    commonStatusChange : (status:boolean) =>{
        dispatch( commonAction.commonStatusChange(status) );
    },
    requestBannerList : () =>{
        dispatch( homeAction.requestBannerList() );
    }
});

export default connect(mapState, mapProps)(Home);