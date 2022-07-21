import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_2 from "../../assets/squadImage/img6.jpg";
import avatar_3 from "../../assets/image/img3.jpg";

import avatar_4 from "../../assets/image/avatar-4.jpg";

import avatar_5 from "../../assets/squadImage/img2.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";
import avatar_7 from "../../assets/squadImage/img8.jpg";
import avatar_8 from "../../assets/squadImage/img4.jpg";
import avatar_9 from "../../assets/squadImage/img5.jpg";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


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
        avatar_1,



    ],
    interestData: ["Shop", "Travel", "Fitness", "Technlogy", "Music", "Architecture"],
    newCommentText: "cool! "

}

const exploreReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                /*usersData:{...state.usersData},*/
                users: state.users.map(user => {  //копирает и меняет юзера
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            } //
        case UNFOLLOW:
            return {
                ...state,
                /*usersData:{...state.usersData},*/
                users: state.users.map(user => {  //копирает и меняет юзера
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            } //
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default exploreReducer;

