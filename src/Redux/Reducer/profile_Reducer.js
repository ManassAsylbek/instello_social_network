import post_1 from "../../assets/image/post1.jpg";
import post_2 from "../../assets/image/post2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";
import avatar_4 from "../../assets/image/avatar-4.jpg";
import img_1 from "../../assets/image/img1.jpg";
import img_8 from "../../assets/image/img8.jpg";
import img_4 from "../../assets/image/img4.jpg";
import {getProfileApi} from "../../api/api";
import {stopSubmit} from "redux-form";


const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_SAVE_PHOTO = 'SET_SAVE_PHOTO';
const SET_SELF_PROFILE = 'SET_SELF_PROFILE';


let initialState = {
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
    profile: null,
    status: "",
    selfProfile: null

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        case SET_SELF_PROFILE:
            return {...state, selfProfile: action.selfProfile}

        case SET_SAVE_PHOTO:
            return {...state, selfProfile: {...state.selfProfile, photos: action.photos},
                profile: {...state.profile, photos: action.photos}}

        /*   case SET_UPDATE_STATUS:
                  return {...state, updateStatus: action.updateStatus}*/
        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}


export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setSelfUsersProfile = (selfProfile) => ({type: SET_SELF_PROFILE, selfProfile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const setSavePhoto = (photos) => ({type: SET_SAVE_PHOTO, photos})
/*export const setSaveProfile = (profile) => ({type: SET_SAVE_PROFILE, profile})*/


export const getUsersProfile = (userId, boolean) => {
    return async (dispatch) => {

        let response = await getProfileApi.getProfile(userId)
        !boolean && dispatch(setSelfUsersProfile(response.data))
        dispatch(setUsersProfile(response.data))


    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {

        const response = await getProfileApi.getStatus(userId)

        dispatch(setUserStatus(response.data))

    }
}

export const getUpdateStatus = (status) => {
    return async (dispatch) => {
        const response = await getProfileApi.getUpdateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }

    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await getProfileApi.getSavePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setSavePhoto(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile) => {

    return async (dispatch,getState) => {
        const userId=getState().auth.userId
        const response = await getProfileApi.saveProfile(profile)

        if (response.data.resultCode === 0) {
            dispatch(getUsersProfile(userId))
        }else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("edit-Profile", {_error: message}))
            return Promise.reject(message)
        }


    }
}

export default profileReducer