/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:32:39 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 14:48:54
 */
import React, { useState, useEffect } from 'react';
import processStyle, { ICssPrefix } from '../../utils/processStyle';
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

    let transformStyle:ICssPrefix = {};
    let transformPrefix = processStyle('transform');
    transformStyle[transformPrefix] = 'rotate(0deg)';

    const [ rotateStyle, setRotateStyle ] = useState(transformStyle);
    const [ opacityStyle, setOpacityStyle ] = useState({ 'opacity' : 0 });

    //根据用户下拉距离，计算滚动效果与透明效果
    useEffect(()=>{
        let thresholdOffset = threshold > offset ? offset : threshold;
        let rotateNum = rotate as number * 360 / threshold * thresholdOffset;
        let rotateOpacity = offset > threshold ? 1 : 1 / threshold * offset;
        let _transformPrefix:ICssPrefix = {};
        _transformPrefix[transformPrefix] = `rotate(${rotateNum}deg)`;
        setRotateStyle(_transformPrefix);
        setOpacityStyle({ 'opacity' : rotateOpacity });
    },[offset]);

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

export default React.memo(PullRefrsh, (prevProps, nextProps) => {
    return false
});