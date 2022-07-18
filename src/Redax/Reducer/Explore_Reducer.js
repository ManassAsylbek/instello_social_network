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
    usersData:[
      ],
    /*interestData: ["Shop", "Travel", "Fitness", "Technlogy", "Music", "Architecture"],
    newCommentText: "cool! "*/

}

const exploreReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {
        case FOLLOW:
            return {...state,
                /*usersData:{...state.usersData},*/
                usersData: state.usersData.map(user =>{  //копирает и меняет юзера
                    if(user.id === action.userId){
                        return {...user,followed:true}
                    }
                    return  user})} //
        case UNFOLLOW:
            return {...state,
                /*usersData:{...state.usersData},*/
                usersData: state.usersData.map(user =>{  //копирает и меняет юзера
                    if(user.id === action.userId){
                        return {...user,followed:false}
                    }
                    return  user})} //
        case SET_USERS:
            return {...state,usersData: [...state.users,...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default exploreReducer;

