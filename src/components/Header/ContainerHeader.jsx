import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {setAuthUsers} from "../../Redux/Reducer/auth_Reducer";
import Profile from "../../Pages/Profile/Profile";

const ContainerHeader = () => {


}

class ContainerHeaderApi extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                    if (response.data.resultCode === 0) {

                        let {id, login, email} = response.data.data
                        this.props.setAuthUsers(id, login, email)


                    }
                }
            )

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
export default connect(mapStateToProps, {setAuthUsers})(ContainerHeaderApi);