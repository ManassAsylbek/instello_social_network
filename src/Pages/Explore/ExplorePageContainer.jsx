import React from "react";
import {connect} from "react-redux";
import ExplorePage from "./ExplorePage";
import Preloader from "../../components/Comman/Preloader/Preloader";
import {
    getUsersThunkCreator,
    getAddUsersThunkCreator,
    followSuccess,
    unFollowSuccess
} from "../../Redux/Reducer/Explore_Reducer";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getInterestData, getIsFetching, getLoadPage,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getusersPhotoData
} from "../../Redux/Reducer/Users_selectots";



class ContainerExplorePageClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onAddPage = () => {
        this.props.getAddUsers(this.props.loadPage)

    }

    onPageChanged = (p) => {
        this.props.getUsers(p,9)


    }


    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i < pageCount; i++) {
            pages.push(i)
        }
        return (<>
                {this.props.isFetching
                    ? <Preloader/>
                    : <ExplorePage
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
                    />}


            </>
        )
    }


}

/*
let mapStateToProps = (state) => {
    return {
        users: state.explorePage.users,
        interestData: state.explorePage.interestData,
        usersPhotoData: state.explorePage.usersPhotoData,
        pageSize: state.explorePage.pageSize,
        totalUsersCount: state.explorePage.totalUsersCount,
        currentPage: state.explorePage.currentPage,
        loadPage: state.explorePage.loadPage,
        isFetching: state.explorePage.isFetching,
        followingInProgress: state.explorePage.followingInProgress,

    }
}*/

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

    }
}

export default compose(
    connect(mapStateToProps, {
        follow:followSuccess,
        unFollow:unFollowSuccess,
        getUsers:getUsersThunkCreator,
        getAddUsers:getAddUsersThunkCreator,
    }),
    WithAuthRedirect
)(ContainerExplorePageClass)