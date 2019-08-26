/*
 * @Author: songzhiheng 
 * @Date: 2019-08-20 13:41:26 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-20 13:57:30
 */
export interface ICssPrefix {
    [ propName:string] : string;
}

class ProcessStyle{
    cssPrefix = '';
    constructor(){
        this.setCssPrefix();
    }
    setCssPrefix (){
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
            return '';
        });
        this.cssPrefix = key ? key : '';
    }
    getCssPrefix(style:string){
        return this.cssPrefix === 'standard' ? 
        style 
        : this.cssPrefix + style.charAt(0).toUpperCase() + style.substr(1);
    }
}
const getProcessStyle = (() =>{
    const initObj = new ProcessStyle();
    return (style:string) => initObj.getCssPrefix(style);
})();
export default getProcessStyle;