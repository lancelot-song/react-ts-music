/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:32:45 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-29 10:37:39
 */
import React from 'react';
import getProcessStyle, { ICssPrefix } from '../../utils/processStyle';
import './style.scss';

export interface IProps {
  scale? : number
}

const Loading:React.FunctionComponent<IProps> = (props) => {
    const { scale } = props;
    const scaleStyle = {
        [getProcessStyle('transform')] : `scale(${scale})`
    };
    return (
        <div className="ui-loading" style={scaleStyle}>
          <div className="loader"></div>
        </div>
    )
}
Loading.defaultProps = {
  scale : 1
}
export default Loading;