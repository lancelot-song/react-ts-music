/*
 * @Author: songzhiheng 
 * @Date: 2019-08-20 13:41:26 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 13:57:30
 */
export interface ICssPrefix {
    [ propName:string] : string;
}
const cssPrefix = (() => {
    const elementStyle:any = document.createElement('div').style;
    const transformNames:ICssPrefix = {
        Webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransfrom',
        ms: 'msTransform',
        standard: 'Transform'
    };
    const key = Object.keys(transformNames).find((key)=>{
        if(elementStyle[ transformNames[key] ] !== undefined) {
            return key;
        }
    });
    return key ? key : '';
})();
const processStyle = (style:string) =>{
    return cssPrefix === 'standard' ? 
        style 
        : cssPrefix + style.charAt(0).toUpperCase() + style.substr(1);
}
export default processStyle;