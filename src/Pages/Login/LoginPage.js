import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormsInput from "../../components/Comman/formsControl/FormsControl";
import {maxLengthCreator, required} from "../../utilits/validators";
import {login} from "../../Redux/Reducer/auth_Reducer";
import {Navigate} from "react-router-dom";



const LoginForm = (props) => {

    const maxLength40 = maxLengthCreator(40)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormsInput} validate={[required, maxLength40]} name={"email"} placeholder="login"/>
            </div>
            <div>
                <Field component={FormsInput} validate={[required, maxLength40]}
                       name={"password"} placeholder="Password" type="password"/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name="RememberMe"/>Remember me
            </div>
            {props.error && <div>
                <span style={{color:"red"}}>{props.error}</span>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const LoginPage = (props) => {


    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe,)
    }
    if (props.isAuth) {
        return <Navigate to="/profile"/>
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};



export default LoginPage;