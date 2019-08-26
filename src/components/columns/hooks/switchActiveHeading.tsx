import { useState } from 'react';
const useSwitchActiveHeading =  (index:number)=>{
    const [ switchActiveIndex, setSwitchActiveIndex ] = useState(index);
    return {
        switchActiveIndex,
        setSwitchActiveIndex
    }
}
export default useSwitchActiveHeading;
