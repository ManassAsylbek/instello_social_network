import {getAuthUser} from "./auth_Reducer";


const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {

    initialized:false,


}

const appReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized:true}

        default:
            return state;
    }
}


export const setInitializedSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = ()=>{
    return (dispatch)=>{
       let promise = dispatch(getAuthUser())
        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedSuccess())
        })
    }
}


export default appReducer;

