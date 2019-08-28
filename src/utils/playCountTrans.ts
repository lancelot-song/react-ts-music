/*
 * @Author: songzhiheng 
 * @Date: 2019-08-19 13:33:32 
 * @Last Modified by: songzhiheng
 * @Last Modified time: 2019-08-28 17:00:43
 */
const playCountTrans = (num:number):string => {
    const numStr = num.toString();
    const len = numStr.length;
    switch( true ){
        case len > 8 :
            return numStr.substr(0, len - 8 ) + '亿';
        case len > 4 :
            return numStr.substr(0, len - 4 ) + '万';
        default : 
            return numStr;
    }
}
export default playCountTrans;