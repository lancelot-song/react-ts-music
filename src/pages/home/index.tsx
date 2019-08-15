import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IHomeProps } from './type'
import * as commonAction from '../../store/actionCreators';


const Home = (props:IHomeProps) => {

    const commonStatusChange = () =>{
        props.commonStatusChange(!props.status);
    }

    return (
        <div className='App'>
                <header className="App-header">
                    <p onClick={commonStatusChange}>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </header>
                { props.children }
        </div>
    )
}

const mapState = (state:any) => ({
    status : state.getIn(['common','status'])
});
const mapProps = (dispatch:any) => ({
    commonStatusChange : (status:boolean) =>{
        dispatch( commonAction.commonStatusChange(status) );
    }
});

export default connect(mapState, mapProps)(Home);