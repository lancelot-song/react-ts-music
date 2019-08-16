import { ReactNode } from 'react';

type TEnterLoading = 'horizental' | 'vertical';

type TPullDownRefreshObject = {
    threshold : number;
    stop : number;
}
type TPullDownRefresh = boolean | TPullDownRefreshObject;

export interface IProps {
    direction : TEnterLoading;
    click? : boolean;
    refresh? : boolean;
    bounceTop? : boolean;
    bounceBottom? : boolean;
    pullRefresh? : TPullDownRefresh;
    pullLoading? : boolean;
    bounceTime? : number;
    onScroll? : () => void;
    onPullUp? : () => void;
    onPullDown? : () => void;
    onPullRefresh? : (endCallback:()=>void) => void;
    children? : ReactNode;
}