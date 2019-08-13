import * as constants from './constants';
export const commonStatusChange = (status:boolean) => ({
    type : constants.COMMON_STATUS,
    status
});