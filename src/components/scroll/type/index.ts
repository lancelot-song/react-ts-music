import { ReactNode } from 'react';

type TEnterLoading = 'horizental' | 'vertical';

export interface IProps {
    direction : TEnterLoading;
    click? : boolean;
    refresh? : boolean;
    pullUpLoading? : boolean;
    pullDownLoading? : boolean;
    bounceTop? : boolean;
    bounceBottom? : boolean;
    onScroll? : () => void;
    onPullUp? : () => void;
    onPullDown? : () => void;
    children? : ReactNode;
}