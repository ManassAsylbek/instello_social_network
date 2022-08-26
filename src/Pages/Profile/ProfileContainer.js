import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../Redux/Reducer/profile_Reducer";

import withRouter from "../../HOC/withRouter";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import AuthRedirectComponents from "../Explore/ExplorePageContainer";


class ContainerProfile extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.setUsersProfile(this.props.router.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile

    }
}


/*
let WithUrlDateContainerProfile = withRouter(ContainerProfile)


let AuthRedirectComponents=WithAuthRedirect(WithUrlDateContainerProfile)

 connect( mapStateToProps,{setUsersProfile:getUsersProfile})(AuthRedirectComponents)*/
export default compose(
    connect(mapStateToProps, {setUsersProfile: getUsersProfile}),
    WithAuthRedirect,
    withRouter
)(ContainerProfile)