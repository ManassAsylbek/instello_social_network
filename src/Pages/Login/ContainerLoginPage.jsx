import React from "react";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {login, setAuthUsers} from '../../Redux/Reducer/auth_Reducer'


class ContainerLoginPage extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <LoginPage login={this.props.login}
                       captchaURL={this.props.captchaURL}
                       isAuth={this.props.isAuth}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}


export default connect(mapStateToProps, {login})(ContainerLoginPage);