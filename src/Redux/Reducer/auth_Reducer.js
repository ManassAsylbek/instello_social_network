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
            return {
                ...state, ...action.data,isAuth: true
            }

        default:
            return state;
    }
}


export const setAuthUsers = (userId, login, email) => ({type: SET_AUTH_USERS, data:{userId, login, email}})

export const getAuthUser = (currentPage,pageSize)=>{
    return (dispatch)=>{
        getAuthApi.getAuth()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data
                        dispatch(setAuthUsers(id, login, email))
                    }
                }
            )
    }
}



export default authReducer;

