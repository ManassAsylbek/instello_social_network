import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_2 from "../../assets/squadImage/img6.jpg";
import avatar_3 from "../../assets/image/img3.jpg";

import avatar_4 from "../../assets/image/avatar-4.jpg";

import avatar_5 from "../../assets/squadImage/img2.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";
import avatar_7 from "../../assets/squadImage/img8.jpg";
import avatar_8 from "../../assets/squadImage/img4.jpg";
import avatar_9 from "../../assets/squadImage/img5.jpg";
import {getUsersApi} from "../../api/api";
import {updateObjectInArray} from "../../utilits/object_helper";


const FOLLOW = 'FOLLOW';
const PORTION_NUMBER = 'PORTION_NUMBER';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_ADD_USERS = 'SET_ADD_USERS';
const LOAD_PAGE = "LOAD_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [
        /*  {id: 1, followed:true, name: "David Peterson", photos: avatar_1, like: 150, post: 30},
          {id: 2, followed:false,name: "Sindy Forest", photos: avatar_6, like: 170, post: 12},
          {id: 3, followed:false,name: "Zara Ali", photos: avatar_4, like: 180, post: 3},
          {id: 4, followed:false, name: "John Snow", photos: avatar_7, like: 110, post: 7},
          {id: 5, followed:true,name: "Angelina Jolie", photos: avatar_2, like: 250, post: 32},
          {id: 6, followed:true,name: "jack Sparow", photos: avatar_3, like: 250, post: 32},
          {id: 7, followed:false,name: "Alex Richard", photos: avatar_5, like: 250, post: 32},
          {id: 8, followed:true,name: "James Bond", photos: avatar_8, like: 250, post: 32},
          {id: 9, followed:false,name: "Victor Salivan ",  photos: avatar_9, like: 250, post: 32}*/
    ],
    usersPhotoData: [
        avatar_1,
        avatar_6,
        avatar_4,
        avatar_7,
        avatar_2,
        avatar_3,
        avatar_5,
        avatar_8,
        avatar_9,


    ],
    interestData: ["Shop", "Travel", "Fitness", "Technlogy", "Music", "Architecture"],
    newCommentText: "cool! ",
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    portionNumber: 1,
    loadPage: 1,
    isFetching: true,
    followingInProgress: [],

}

const exploreReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                /* users: state.users.map(user => {
                     if (user.id === action.userId) {
                         return {...user, followed: true}
                     }
                     return user
                 })*/
            } //
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                /* users: state.users.map(user => {  //копирает и меняет юзера
                     if (user.id === action.userId) {
                         return {...user, followed: false}
                     }
                     return user
                 })*/
            } //
        /*case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}*/ /*каждый раз будет добовлять новых юзеров*/
        case SET_USERS:
            return {...state, users: action.users} /*каждый раз будет добовлять новых юзеров*/
        case SET_ADD_USERS:
            return {...state, users: [...state.users, ...action.users],} /*каждый раз будет добовлять новых юзеров*/
        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count} /*каждый раз будет добовлять новых юзеров*/
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.boolean}
        case PORTION_NUMBER:
            return {...state, portionNumber: action.number}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        case LOAD_PAGE:
            return {...state, loadPage: action.number}

        case CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        /* case LOAD_USERS:
             return {...state, users: [...state.users,...action.users]}*/

        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const setPortionNumber = (number) => ({type: PORTION_NUMBER, number})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setAddUsers = (users) => ({type: SET_ADD_USERS, users})
export const setUsersTotalCount = (count) => ({type: SET_USERS_COUNT, count})
export const setloadPage = (number) => ({type: LOAD_PAGE, number})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const toggleFetching = (boolean) => ({type: TOGGLE_FETCHING, boolean})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await getUsersApi.getUsers(currentPage, pageSize)
        dispatch(toggleFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))

    }
}
export const getAddUsersThunkCreator = (loadPage) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true))
        let n = loadPage + 1
        let data = await getUsersApi.getUsers(n, 8)

        dispatch(toggleFetching(false))
        dispatch(setAddUsers(data.items))

    }
}

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleIsFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}

export const unFollowSuccess = (userId) => (dispatch) => {

    followUnFollowFlow(dispatch, userId, getUsersApi.getUnFollow.bind(getUsersApi), unFollow)


}
export const followSuccess = (userId) => (dispatch) => {
    followUnFollowFlow(dispatch, userId, getUsersApi.getFollow.bind(getUsersApi), follow)

}


export default exploreReducer;

