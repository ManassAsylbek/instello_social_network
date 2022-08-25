import React, {useEffect, useState} from "react";
import * as axios from "axios";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {setAuthUsers} from '../../Redux/Reducer/auth_Reducer'


class ContainerLoginPage extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                    if (response.date.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        this.props.setAuthUsers(id, login, email)
                        debugger

                    }
                }
            )
    }

    render() {
        return (
            <LoginPage/>
        );
    };
}

let mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, {setAuthUsers})(ContainerLoginPage);