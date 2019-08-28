import React, { useState, useMemo, FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import playCountTrans from '../../utils/playCountTrans'
import Heading, { TParams as IHeading } from './heading';
import useSwitchActiveHeading from './hooks/switchActiveHeading';
import './style.scss';

export interface IItem {
    name : string;
    picUrl : string;
    id : number;
    playCount? : number;
    money? : number;
    label? : string;
    url? : string;
    intro? : string;
    handle? : () => void;
}
export interface IProps{
    heading : IHeading[];
    items : IItem[][];
    children? : ReactNode
}

const ColumnVertical: FC<IProps> = (props) => {
    const { items, heading } = props;
    const { switchActiveIndex, setSwitchActiveIndex } = useSwitchActiveHeading(0);

    
    const itemsComponet = useMemo(()=>{
        return items.length ? items[switchActiveIndex].map((item,index)=>(
                <Link to={'/'} className='item' key={index}>
                    <div className='pic-group'>
                        <img src={item.picUrl} className='pic' />
                        { 
                            item.intro 
                            && <div className='intro'>{item.intro}</div> 
                        }
                        { 
                            item.playCount 
                            && <div className='pic-head'><div className='play-count'>{ playCountTrans(item.playCount) }</div></div>
                        }
                        { 
                            item.label 
                            && <div 
                                className='label' 
                                style={{'backgroundColor':item.label}}>{item.label}</div>
                        }
                    </div>
                    <div className='text'>{item.name}</div>
                </Link>
        )) : null;
    },[items, switchActiveIndex]);

    return (
        <div className='ui-layout ui-column'>
            <Heading 
                params={heading} 
                activeIndex={switchActiveIndex}
                onSwitchActive={setSwitchActiveIndex} />
            <div className='ui-column-vertical'>{ itemsComponet }</div>
        </div>
    )
}

export default React.memo(ColumnVertical);