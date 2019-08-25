import React from 'react';
import { fromJS } from 'immutable';
import * as constants from './constants';

import { ReactComponent as IconData }  from '../../../assets/images/icon-date.svg';
import { ReactComponent as IconMusic }  from '../../../assets/images/icon-music.svg';
import { ReactComponent as IconHot }  from '../../../assets/images/icon-hot.svg';
import { ReactComponent as IconVideo }  from '../../../assets/images/icon-video.svg';


const defaultState = fromJS({
    bannerList : [],
    bannerConfig : { 
        autoplay : {
            delay : 5000
        },
        pagination: {
            el: '.banner-swiper-pagination'
        }
    },
    menuList : [{
        title : '每日推荐',
        icon : <IconData/>,
        url :''
    },{
        title : '歌单',
        icon : <IconMusic/>,
        url :''
    },{
        title : '排行榜',
        icon : <IconHot/>,
        url :''
    },{
        title : '电台',
        icon : <IconMusic />,
        url :''
    },{
        title : '直播',
        icon : <IconVideo />,
        url :''
    }],
    songSheet :{
        heading : [{
            title : '歌单推荐',
            btn : {
                context : '歌单广场',
                icon : '111'
            }
        },{
            title : '歌单推荐2',
            btn : {
                context : '歌单广场2',
                icon : '222'
            }
        }],
        items : [[]]
    },
    enterLoading : true,
    scrollConfig : {
        direction : 'vertical',
        bounce:{
            top:true,
            bottom:true
        },
        pullDownRefresh : {
            threshold : 90,
            stop : 50
        }
    }
});

type TAction = {
    type : string;
    data : object[] | boolean;
}
export default (state = defaultState, action:TAction) => {
    switch(action.type){
        case constants.CHANGE_BANNER_LIST:
            return state.set("bannerList", action.data);
        case constants.CHANGE_RECOMMEND_LIST:
            return state.set('recommendList', action.data);
        case constants.CHANGE_ENTER_LOADING:
            return state.set('enterLoading', action.data);
        default:;
    }
    return state;
}