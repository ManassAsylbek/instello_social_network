import feedReducer from "./Reducer/feed_Reducer";
import messagesReducer from "./Reducer/messages_Reducer";
import profileReducer from "./Reducer/profile_Reducer";
import {combineReducers, legacy_createStore} from "redux";
import exploreReducer from "./Reducer/Explore_Reducer";


let reducers = combineReducers({
    feedPage:feedReducer,
    messagesPage:messagesReducer,
    profilePage:profileReducer,
    explorePage:exploreReducer
})

let store = legacy_createStore(reducers);//создаем сторе

window.store=store;

export default store
