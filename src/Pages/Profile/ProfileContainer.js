import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";


import {setUsersProfile} from "../../Redux/Reducer/profile_Reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";




class ContainerProfile extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
             userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                    this.props.setUsersProfile(response.data)
                }
            );
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile

    }
}

let WithUrlDateContainerProfile = withRouter(ContainerProfile)

export default connect( mapStateToProps,{setUsersProfile})(WithUrlDateContainerProfile)