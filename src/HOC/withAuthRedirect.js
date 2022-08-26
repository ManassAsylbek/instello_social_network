import React from 'react';


import {connect} from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const WithAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        return (
            !props.isAuth
                ? <Navigate to="/login"/>
                : <Component{...props}/>
        )
    };

    let ConnectAuthRedirectContainer = connect(mapStateToProps)(RedirectComponent)
    return ConnectAuthRedirectContainer
}


export default WithAuthRedirect;