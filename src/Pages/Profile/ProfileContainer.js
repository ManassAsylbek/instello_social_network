import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUpdateStatus,
    getUsersProfile,
    getUserStatus,
    savePhoto,
    saveProfile
} from "../../Redux/Reducer/profile_Reducer";

import withRouter from "../../HOC/withRouter";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

/*

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
    c

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     getUpdateStatus={this.props.getUpdateStatus}
                     status={this.props.status}
                     isOwner={!this.props.router.params.userId}
                     savePhoto={this.props.savePhoto}
            />
        );
    };
}
*/


const ContainerProfile = (props) => {

    const refresh = () => {
        let userId = props.router.params.userId
        if (!userId) {
            userId = props.authorizedUserId
            props.setUsersProfile(userId,false)

        }
        props.setUsersProfile(userId,true)
        props.getUserStatus(userId)
    }

    useEffect(refresh, [props.router.params.userId])


    return (
        <Profile {...props}
                 isOwner={!props.router.params.userId}
                 profile={props.profile}
                 getUpdateStatus={props.getUpdateStatus}
                 status={props.status}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}

        />
    );
};


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,


    }
}


export default compose(
    connect(mapStateToProps, {setUsersProfile: getUsersProfile,
        getUpdateStatus, getUserStatus, savePhoto,saveProfile}),
    WithAuthRedirect,
    withRouter
)(ContainerProfile)