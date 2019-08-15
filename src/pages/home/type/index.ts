import React from 'react';

export interface IHomeProps{
    commonStatusChange:(status:boolean)=>void;
    status : boolean;
    children : React.ReactNode;
}