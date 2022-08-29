import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUpdateStatus, getUsersProfile, getUserStatus} from "../../Redux/Reducer/profile_Reducer";

import withRouter from "../../HOC/withRouter";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ContainerProfile extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
        }
        this.props.setUsersProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     getUpdateStatus={this.props.getUpdateStatus}
                     status={this.props.status}
            />
        );
    };
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId:state.auth.userId,
        isAuth:state.auth.isAuth,


    }
}


export default compose(
    connect(mapStateToProps, {setUsersProfile: getUsersProfile, getUpdateStatus,getUserStatus}),
    WithAuthRedirect,
    withRouter
)(ContainerProfile)