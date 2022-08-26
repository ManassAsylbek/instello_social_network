import React from "react";
import {connect} from "react-redux";
import Header from "./Header";

import {setAuthUsers} from "../../Redux/Reducer/auth_Reducer";

import {getAuth} from "../../api/api";

const ContainerHeader = () => {


}

class ContainerHeaderApi extends React.Component {

    componentDidMount() {

        getAuth()
            .then(data => {

                    if (data.resultCode === 0) {

                        let {id, login, email} = data.data
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