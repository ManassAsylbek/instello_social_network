import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUser} from "../../Redux/Reducer/auth_Reducer";


class ContainerHeader extends React.Component {

    componentDidMount() {
        this.props.setAuthUsers()
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}/>
        );
    };

}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {setAuthUsers: getAuthUser})(ContainerHeader);