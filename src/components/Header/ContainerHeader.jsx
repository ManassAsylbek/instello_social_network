import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import { logOut} from "../../Redux/Reducer/auth_Reducer";


class ContainerHeader extends React.Component {

    componentDidMount() {
      /*  this.props.setAuthUsers()*/
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
                    profile={this.props.profile}
                    logOut={this.props.logOut}/>
        );
    };

}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.selfProfile,
    }
}
export default connect(mapStateToProps, { logOut})(ContainerHeader);