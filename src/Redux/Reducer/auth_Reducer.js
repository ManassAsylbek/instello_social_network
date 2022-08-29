import {getAuthApi} from "../../api/api";
import {setUsers, setUsersTotalCount, toggleFetching} from "./Explore_Reducer";


const SET_AUTH_USERS = 'SET_AUTH_USERS';


let initialState = {
    userId:null,
    login:null,
    email:null,
    isAuth:false,


}

const authReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {
        case SET_AUTH_USERS:
            return {...state, ...action.payload}

        default:
            return state;
    }
}


export const setAuthUsers = (userId, login, email, isAuth) => ({type: SET_AUTH_USERS,
    payload:{userId, login, email,isAuth}})

export const getAuthUser = ()=>{
    return (dispatch)=>{
        getAuthApi.getAuth()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data
                        dispatch(setAuthUsers(id, login, email,true))
                    }
                }
            )
    }
}
export const login = (email, password, rememberMe)=>{
    return (dispatch)=>{
        getAuthApi.getLogin(email, password, rememberMe)
            .then(response => {
                    if (response.data.resultCode === 0) {

                        dispatch(getAuthUser())

                    }
                }
            )
    }
}
export const logOut = ()=>{
    return (dispatch)=>{
        getAuthApi.getLogOut()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUsers(null, null, null,false))
                    }
                }
            )
    }
}



export default authReducer;

