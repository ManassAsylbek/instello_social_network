import post_1 from "../../assets/image/post1.jpg";
import post_2 from "../../assets/image/post2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";
import avatar_4 from "../../assets/image/avatar-4.jpg";
import img_1 from "../../assets/image/img1.jpg";
import img_8 from "../../assets/image/img8.jpg";
import img_4 from "../../assets/image/img4.jpg";
import {getProfileApi, getUsersApi} from "../../api/api";


const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS';


let initialState={
    explorerData: [
        {img: post_1, likeCounts: 30},
        {img: post_2, likeCounts: 30},
        {img: avatar_1, likeCounts: 30},
        {img: avatar_6, likeCounts: 30},
        {img: avatar_4, likeCounts: 30},
        {img: img_1, likeCounts: 30},
        {img: img_8, likeCounts: 30},
        {img: img_4, likeCounts: 30},
    ],
    profile:null,
    status:"",
   /* updateStatus:null,*/
}

const profileReducer = (state =initialState,action) => {
    switch (action.type) {

        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
     /*   case SET_UPDATE_STATUS:
            return {...state, updateStatus: action.updateStatus}*/
        default:
            return state;
    }
}


export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
/*export const setUpdateStatus = (updateStatus) => ({type: SET_UPDATE_STATUS, updateStatus})*/

export const getUsersProfile = (userId)=>{
    return (dispatch)=>{

        getProfileApi.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
                }
            );


    }
}

export const getUserStatus = (userId)=>{
    return (dispatch)=>{

        getProfileApi.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
                }
            );


    }
}

export const getUpdateStatus = (status)=>{
    return (dispatch)=>{
        getProfileApi.getUpdateStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setUserStatus(status))
                    }
                }
            );


    }
}

export default profileReducer