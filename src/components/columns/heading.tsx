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
        <div>
        {
            params.map((item, index)=>{
                const isActive = activeIndex === index ? 'active' : '';
                return (
                    <div className='ui-column-heading' key={item.title}>
                        <h3 className='title' key={item.title}>
                            <span className={'title '+ isActive} onClick={()=>{
                                console.log(index)
                                    onSwitchActive(index);
                                }}>
                                { item.title }
                            </span>
                        </h3>
                        {
                            isActive ? (
                                <span className='btn' onClick={item.btn.handle} >
                                    { item.btn.icon && <i className='icon'>{ item.btn.icon }</i> }
                                    { item.btn.context }
                                </span> 
                            ) : null
                        }
                    </div>
                )
            })
        }
        </div>
    )
}

export default React.memo(Heading);