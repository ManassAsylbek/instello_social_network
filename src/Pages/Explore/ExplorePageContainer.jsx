import React from "react";
import {connect} from "react-redux";
import ExplorePage from "./ExplorePage";

import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getInterestData, getIsFetching, getLoadPage,
    getPageSize, getPortionNumber,
    getTotalUsersCount,
    getUsers,
    getusersPhotoData
} from "../../Redux/Reducer/Users_selectots";
import {
    getUsersThunkCreator,
    getAddUsersThunkCreator,
    followSuccess,
    unFollowSuccess,
    setPortionNumber
} from "../../Redux/Reducer/Explore_Reducer";


class ContainerExplorePageClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onAddPage = () => {
        this.props.getAddUsers(this.props.loadPage)

    }

    onPageChanged = (p) => {
        this.props.getUsers(p, 9)


    }


    render() {


        return (<>
                <ExplorePage
                    onPageChanged={this.onPageChanged}
                    onAddPage={this.onAddPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    interestData={this.props.interestData}
                    users={this.props.users}
                    usersPhotoData={this.props.usersPhotoData}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    currentPage={this.props.currentPage}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    isFetching={this.props.isFetching}
                    portionNumber={this.props.portionNumber}
                    setPortionNumber={this.props.setPortionNumber}
                />


            </>
        )
    }


}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        interestData: getInterestData(state),
        usersPhotoData: getusersPhotoData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        loadPage: getLoadPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionNumber: getPortionNumber(state)

    }
}

export default compose(
    connect(mapStateToProps, {
        follow: followSuccess,
        unFollow: unFollowSuccess,
        getUsers: getUsersThunkCreator,
        getAddUsers: getAddUsersThunkCreator,
        setPortionNumber
    }),
    WithAuthRedirect
)(ContainerExplorePageClass)