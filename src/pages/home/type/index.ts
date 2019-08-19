/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:09 
 * @Last Modified by:   songzhiheng 
 * @Last Modified time: 2019-08-19 13:33:09 
 */
import React from 'react';

export interface IHomeProps{
    commonStatusChange:(status:boolean)=>void;
    status : boolean;
    children : React.ReactNode;
}