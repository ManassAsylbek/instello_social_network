import React from "react";
import {connect} from "react-redux";
import ExplorePage from "./ExplorePage";
import {followAC, setUsersAC, unfollowAC} from "../../Redax/Reducer/Explore_Reducer";

let mapStateToProps = (state) => {
    return {
        usersData:state.explorePage.usersData,
        interestData:state.explorePage.interestData
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
const ExplorePageContainer = connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
export default ExplorePageContainer;