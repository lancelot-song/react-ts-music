import { ReactNode } from 'react';
import { BsOption } from 'better-scroll'
export type TBsOption = Partial<BsOption>;

type TEnterLoading = 'horizental' | 'vertical';

type TPullDownRefreshObject = {
    threshold : number;
    stop : number;
}
type TPullDownRefresh = boolean | TPullDownRefreshObject;

export interface IProps extends TBsOption{
    direction : TEnterLoading;
    refresh? : boolean;
    pullLoading? : boolean;
    onScroll? : () => void;
    onPullUp? : () => void;
    onPullDown? : () => void;
    onPullRefresh? : (endCallback:()=>void) => void;
    children? : ReactNode;
}