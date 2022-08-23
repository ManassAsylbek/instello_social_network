import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import ExplorePage from "./ExplorePage";

/*import Preloader from "../../components/Comman/Preloader/Preloader";*/

import {
    currentPage,
    follow, loadPage,
    setAddUsers,
    setUsers,
    setUsersTotalCount,
    toggleFetching,
    unfollow
} from "../../Redux/Reducer/Explore_Reducer";
import preloader from "../../assets/animation/Spinner-1s-200px.gif";
import Preloader from "../../components/Comman/Preloader/Preloader";

class ContainerExplorePageClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggleFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.toggleFetching(response.data.totalCount)
                }
            );
    }

    onAddPage = () => {
        this.props.toggleFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.loadPage + 1}&count=${8}`)
            .then(response => {
                    this.props.toggleFetching(false)
                    this.props.setAddUsers(response.data.items)
                }
            );
        this.props.loadPage(this.props.loadPage + 1)
    }

    onPageChanged = (p) => {
        this.props.currentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${9}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
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
                {this.props.isFetching===true
                    ? <Preloader />
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
                        currentPage={this.props.currentPage}/>}



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
    loadPage,
    currentPage,
    toggleFetching
})(ContainerExplorePageClass);
