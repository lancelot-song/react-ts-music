import React from 'react';
import { fromJS } from 'immutable';
import * as constants from './constants';
import routerPath from '../../../api/routerPath';

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
    musicSquare :{
        heading : [{
            title : '推荐歌单',
            btn : {
                context : '歌单广场',
                url : routerPath.home.musicSquare
            }
        }],
        items : [[{},{},{},{},{},{},{},{},{}]]
    },
    musicSheet :{
        heading : [{
            title : '新碟',
            btn : {
                context : '更多新碟',
                url : routerPath.home.musicSaucer
            }
        },{
            title : '新歌',
            btn : {
                context : '新歌推荐',
                url : routerPath.home.musicSingles
            }
        }],
        items : [[{},{},{}]]
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
        case constants.CHANGE_MUSIC_SQUARE:
            return state.setIn(['musicSquare','items',0], action.data);
        case constants.CHANGE_MUSIC_SHEET:
            return state.setIn(['musicSheet','items'], action.data);
        case constants.CHANGE_ENTER_LOADING:
            return state.set('enterLoading', action.data);
        default:;
    }
    return state;
}