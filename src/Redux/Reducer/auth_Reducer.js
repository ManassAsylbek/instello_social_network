

const SET_AUTH_USERS = 'SET_AUTH_USERS';


let initialState = {
    userId:null,
    login:null,
    email:null,


}

const authReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {
        case SET_AUTH_USERS:
            return {
                ...state, ...action.data
            }

        default:
            return state;
    }
}


export const setAuthUsers = (userId, login, email) => ({type: SET_AUTH_USERS, date:{userId, login, email}})


export default authReducer;

