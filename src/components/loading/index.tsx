/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:32:45 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 13:59:33
 */
import React from 'react';
import processStyle, { ICssPrefix } from '../../utils/processStyle';
import './style.scss';

export interface IProps {
  scale? : number
}

const Loading:React.FunctionComponent<IProps> = (props) => {
    const { scale } = props;
    const scaleStyle:ICssPrefix = {};
    scaleStyle[processStyle('transform')] = `scale(${scale})`;
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