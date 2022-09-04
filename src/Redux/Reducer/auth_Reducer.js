import {getAuthApi, getSecurityApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import {required} from "../../utilits/validators";


const SET_AUTH_USERS = 'AUTH/SET_AUTH_USERS';
const SET_CAPTCHA_URL = 'AUTH/SET_CAPTCHA_URL';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null, //if null captcha is not required


}

const authReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {
        case SET_AUTH_USERS:
        case SET_CAPTCHA_URL:
            return {...state, ...action.payload}



        default:
            return state;
    }
}

export const setCaptchaURL = (captchaURL) => ({type:SET_CAPTCHA_URL,payload:{captchaURL}})
export const setAuthUsers = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USERS,
    payload: {userId, login, email, isAuth}
})

export const getAuthUser = () => async (dispatch) => {
    let data = await getAuthApi.getAuth()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUsers(id, login, email, true))
    }


}
export const login = (email, password, rememberMe,captcha) =>
    async (dispatch) => {
        let response = await getAuthApi.getLogin(email, password, rememberMe,captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUser())
        }
        else {
            if(response.data.resultCode === 10){
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}))
        }
    }

export const getCaptcha = () =>
    async (dispatch) => {
        let response = await getSecurityApi.getCaptchaUrl()
        const url = response.data.url
        dispatch(setCaptchaURL(url))
    }


export const logOut = () => async (dispatch) => {
    let response = await getAuthApi.getLogOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsers(null, null, null, false))
    }
}


export default authReducer;

