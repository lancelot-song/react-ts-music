/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:32:39 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-19 16:14:37
 */
import React, { useState, useEffect } from 'react';
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

    const [ rotateStyle, setRotateStyle ] = useState({ 
        'WebkitTransform' : `rotate(0deg)`
    });
    const [ opacityStyle, setOpacityStyle ] = useState({ 
        'opacity' : 0
    });

    //根据用户下拉距离，计算滚动效果与透明效果
    useEffect(()=>{
        let thresholdOffset = threshold > offset ? offset : threshold;
        let rotateNum = rotate as number * 360 / threshold * thresholdOffset;
        let rotateOpacity = offset > threshold ? 1 : 1 / threshold * offset;
        setRotateStyle({
            'WebkitTransform' : `rotate(${rotateNum}deg)`
        });
        setOpacityStyle({
            'opacity' : rotateOpacity
        })
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

export default React.memo(PullRefrsh);