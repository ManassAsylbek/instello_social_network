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

        this.props.setUsersProfile(this.props.router.params.userId)
        this.props.getUserStatus(this.props.router.params.userId)
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


    }
}


export default compose(
    connect(mapStateToProps, {setUsersProfile: getUsersProfile, getUpdateStatus,getUserStatus}),
    WithAuthRedirect,
    withRouter
)(ContainerProfile)