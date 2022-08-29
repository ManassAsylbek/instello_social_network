import React from "react";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {login, setAuthUsers} from '../../Redux/Reducer/auth_Reducer'


class ContainerLoginPage extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <LoginPage login={this.props.login} isAuth={this.props.isAuth}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(ContainerLoginPage);