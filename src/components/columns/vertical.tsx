import React, { useState, useEffect, FC, ReactNode } from 'react';
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

    const [ activeHeadingIndex, setActiveHeadingIndex ] = useSwitchActiveHeading(0);
    console.log(activeHeadingIndex);
    const headingComponent = heading ? (
        <Heading 
            params={heading} 
            activeIndex={activeHeadingIndex as number}
            onSwitchActive={setActiveHeadingIndex} />
    ) : '';
    console.log(items[activeHeadingIndex as number]);
    console.log(items)
    const itemsComponet = '1'
    // const itemsComponet = items[activeHeadingIndex as number].map(item=>{
    //     return (
    //         <div className='item' key={item.picUrl}>
    //             <div className='pic-group'>
    //                 <img src={item.picUrl} className='pic' />
    //                 { item.intro && <div className='intro'>{item.intro}</div> }
    //                 { item.playCount && <div className='play-count'>{item.playCount}</div> }
    //                 { item.label && <div className='label' style={{'backgroundColor':item.label}}>{item.label}</div> }
    //             </div>
    //         </div>
    //     )
    // })
    return (
        <div className='ui-column'>
            { headingComponent }
            <div className='ui-column-vertical'>{ itemsComponet }</div>
        </div>
    )
}

export default React.memo(ColumnVertical);