import React, { useState } from 'react';
const useSwitchActiveHeading =  (index:number)=>{
    const [ activeIndex, setActiveIndex ] = useState(index);
    return [
        activeIndex,
        setActiveIndex
    ]
}
export default useSwitchActiveHeading;
