import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as commonAction from '../../store/actionCreators';
import logo from '../../logo.svg';

interface IProps{
    status : boolean;
    commonStatusChange:(status:boolean)=>void;
}

// Regular props
class Home extends PureComponent<IProps>{
    commonStatusChange = () =>{
        this.props.commonStatusChange(!this.props.status);
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p onClick={this.commonStatusChange}>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
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