/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:32:39 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-29 17:44:05
 */
import React, { FC, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionCreators as actions } from './store';
import { SHOW_NOTICE } from './store/constants';
import './style.scss';

export interface IShowNotice{
    showNotice : (txt : string, showTime:number) => void,
}
export interface IProps extends IShowNotice{
    showTime : number;
    txt : string;
}


class Notice extends React.PureComponent<IProps>{
    state = {
        timeout : null,
        showClass : '',
        txt : ''
    }
    constructor(props:any){
        super(props);
    }
    componentDidUpdate(){
        const self = this;
        console.log(self.props.txt);
        console.log(self.state.txt);
        if(self.props.txt!==self.state.txt){
            self.setState({
                ...self.state,
                timeout : setTimeout(()=>{
                    self.setState({
                        ...self.state,
                        showClass : ''
                    });
                    setTimeout(()=>{
                        self.props.showNotice('', 0);
                    }, 1000);
                }, self.props.showTime),
                showClass : 'show',
                txt : self.props.txt
            });
        }
    }
    render(){
        const { showClass, txt } = this.state;
        return (
            txt 
            ? <div className={`ui-notice ${ showClass }`}><span>{ txt }</span></div> 
            : null
        )
    }
}

/* const Notice: FC<IProps> = (props) => {

    const { showTime, txt } = props;
    const { showNotice } = props;
    const [ showClass, setShowClass ] = useState('');

    const timeoutRef = useRef<any>();
    useEffect(()=>{
        if( txt ){
            clearTimeout(timeoutRef.current);
            setShowClass('show');
            const hide = setTimeout(()=>{
                setShowClass('');
                setTimeout(()=>{
                    showNotice('', 0);
                }, 1000);
            }, showTime);
            timeoutRef.current = hide;
        }
    },[txt]);
    
    return (
        txt 
            ? <div className={`ui-notice ${showClass}`}><span>{ txt }</span></div> 
            : null
    )
} */

const mapState = (state:any) =>({
    showTime : state.getIn(['notice','showTime']),
    txt : state.getIn(['notice','txt'])
})
const mapDispatch = (dispatch:Dispatch):IShowNotice =>({
    showNotice(txt, showTime){
        dispatch(actions.showNotice(txt, showTime))
    }
})

//export default connect(mapState, mapDispatch)(React.memo(Notice));
export default connect(mapState, mapDispatch)(Notice);