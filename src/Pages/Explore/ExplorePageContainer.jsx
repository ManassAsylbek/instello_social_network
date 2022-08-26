import React from "react";
import {connect} from "react-redux";
import ExplorePage from "./ExplorePage";


import {
    currentPage,
    follow,
    setAddUsers, setloadPage,
    setUsers,
    setUsersTotalCount,
    toggleFetching,
    unfollow,
    toggleIsFollowingProgress, getUsersThunkCreator
} from "../../Redux/Reducer/Explore_Reducer";

import Preloader from "../../components/Comman/Preloader/Preloader";
import {getUsers, getUsersApi} from "../../api/api";

class ContainerExplorePageClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
       /* this.props.toggleFetching(true)

        getUsersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setUsersTotalCount(data.totalCount)
                }
            );*/
    }

    onAddPage = () => {
        this.props.toggleFetching(true)
        let n = +this.props.loadPage + 1
        getUsersApi.getUsers(n, 8)
            .then(data => {
                    this.props.toggleFetching(false)
                    this.props.setAddUsers(data.items)
                }
            );
        this.props.setloadPage(n)
    }

    onPageChanged = (p) => {
        this.props.currentPage(p)
        getUsersApi.getUsers(p, 9)
            .then(data => {
                    this.props.setUsers(data.items)
                }
            );
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
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        currentPage={this.props.currentPage}
                        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
                    />}


            </>
        )
    }


}


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
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setAddUsers: (users) => {
            dispatch(setAddUsersAC(users))
        },
        setTotalUseCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setLoadPage: (number) => {
            dispatch(loadPageAC(number))
        },
        setCurrentPage: (number) => {
            dispatch(currentPageAC(number))
        },
        setToggleFetching: (boolean) => {
            dispatch(toggleFetchingAC(boolean))
        }
    }
}*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setAddUsers,
    setUsersTotalCount,
    setloadPage,
    currentPage,
    toggleFetching,
    toggleIsFollowingProgress,
    getUsersThunkCreator
})(ContainerExplorePageClass);
