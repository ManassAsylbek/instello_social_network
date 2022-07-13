import feedReducer from "./Reducer/feed_Reducer";
import messagesReducer from "./Reducer/messages_Reducer";
import profileReducer from "./Reducer/profile_Reducer";
import {combineReducers, legacy_createStore} from "redux";


let reducers = combineReducers({
    feedPage:feedReducer,
    messagesPage:messagesReducer,
    profilePage:profileReducer
})

let store = legacy_createStore(reducers);//создаем сторе
export default store
