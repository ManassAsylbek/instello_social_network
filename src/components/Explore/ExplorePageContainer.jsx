import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redax/Reducer/Explore_Reducer";
/*import ExplorePage from "./ExplorePage";*/
import ExplorePageClass from "./ExplorePageClass";
/*import ExplorePageLocal from "./ExplorePageLocal";*/


let mapStateToProps = (state) => {
    return {
        users:state.explorePage.users,
        interestData:state.explorePage.interestData,
        usersPhotoData:state.explorePage.usersPhotoData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        }
    }
}
const ExplorePageContainer = connect(mapStateToProps, mapDispatchToProps)(ExplorePageClass);
export default ExplorePageContainer;