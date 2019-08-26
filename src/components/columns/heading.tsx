import React, {  ReactNode, FC } from 'react';
import './style.scss';
export type TParams = {
    title : string;
    btn : {
        context : string;
        icon? : ReactNode;
        handle? : any
    }
}
export interface IProps{
    params : TParams[],
    activeIndex : number;
    onSwitchActive? : any
}

const Heading: FC<IProps> = (props) => {
    const { params, activeIndex } = props;
    const { onSwitchActive } = props;
    return (
        <div className='ui-column-heading'>
        <h3 className='title-group'>
            {
                params.map((item, index)=>{
                    const isActive = activeIndex === index ? 'active' : '';
                    const paramsLen = params.length;
                    const isLine = paramsLen > 1 && index + 1 < paramsLen ? 'show-line' : '';
                    return (
                        <span 
                            className={`title ${isActive} ${isLine}`} 
                            key={item.title}
                            onClick={()=>{ onSwitchActive(index) }}>
                            { item.title }
                        </span>
                    )
                })
            }
        </h3>
        {
            <span 
                className='btn' 
                onClick={params[activeIndex].btn.handle} >
                { params[activeIndex].btn.icon && <i className='icon'>{ params[activeIndex].btn.icon }</i> }
                { params[activeIndex].btn.context }
            </span> 
        }
        </div>
    )
}

export default React.memo(Heading);