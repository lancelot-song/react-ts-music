import React, { useState, useEffect } from 'react';
// import propTypes from 'prop-types';
//import { IProps } from './type';
import './style.scss';

const PullRefrsh: React.FunctionComponent = (props) => {

    //const { onRefresh, initOffset, maxOffset } = props;

    //const [ offsetStyle, setOffsetStyle ] = useState({ top : initOffset });

    // useEffect(()=>{
    //     //感叹号帮助TS正确推断
    //     initOffset! >= maxOffset! ? setOffsetStyle({ top : initOffset }) : setOffsetStyle({ top : maxOffset });
    // },[initOffset]);

    return (
        <div className='ui-pull-refresh'>
            <i className='icon'></i>
        </div>
    )
}

// PullRefrsh.defaultProps = {
//     initOffset : 0,
//     maxOffset : 100,
//     onRefresh : () => {}
// }

export default React.memo(PullRefrsh);