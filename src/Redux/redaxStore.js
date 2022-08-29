import feedReducer from "./Reducer/feed_Reducer";
import messagesReducer from "./Reducer/messages_Reducer";
import profileReducer from "./Reducer/profile_Reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import exploreReducer from "./Reducer/Explore_Reducer";
import authReducer from "./Reducer/auth_Reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./Reducer/app_Reducer";


let reducers = combineReducers({
    feedPage:feedReducer,
    messagesPage:messagesReducer,
    profilePage:profileReducer,
    explorePage:exploreReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
})

let store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware));//создаем сторе

window.store=store;

export default store
