/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:32:39 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-29 10:37:20
 */
import React, { useState, useEffect } from 'react';
import getProcessStyle, { ICssPrefix } from '../../utils/processStyle';
import { ReactComponent as IconRefresh } from '../../assets/images/icon-refresh.svg';
import './style.scss';

export interface IProps{
    threshold : number;
    offset : number;
    isRefreshing : boolean;
    rotate? : number;
}

const PullRefrsh: React.FunctionComponent<IProps> = (props) => {

    const { threshold, rotate, offset, isRefreshing } = props;

    const transformPrefix = getProcessStyle('transform');
    const [ rotateStyle, setRotateStyle ] = useState({ [transformPrefix] :'rotate(0deg)' });
    const [ opacityStyle, setOpacityStyle ] = useState({ 'opacity' : 0 });

    //根据用户下拉距离，计算滚动效果与透明效果
    useEffect(()=>{
        let thresholdOffset = threshold > offset ? offset : threshold;
        let rotateNum = rotate as number * 360 / threshold * thresholdOffset;
        let rotateOpacity = offset > threshold ? 1 : 1 / threshold * offset;
        setRotateStyle({ [transformPrefix] : `rotate(${rotateNum}deg)` });
        setOpacityStyle({ 'opacity' : rotateOpacity });
    },[offset, rotate, threshold, transformPrefix]);

    return (
        <div className='ui-pull-refresh'>
            <div className={'icon-group '+(isRefreshing ? 'refreshing' : '')}  style={opacityStyle}>
                <IconRefresh className='line' style={rotateStyle}/>
            </div>
        </div>
    )
}

PullRefrsh.defaultProps = {
    offset : 0,
    threshold : 90,
    rotate : 2,
    isRefreshing : false
}

export default React.memo(PullRefrsh);