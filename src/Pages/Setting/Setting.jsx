import React from "react";
import s from './Setting.module.css';
import {compose} from "redux";
import WithAuthRedirect from "../../HOC/withAuthRedirect";

const Setting =(props)=>{
    return (
        <div>
          SETTING
        </div>
    )
}

export default compose( WithAuthRedirect)(Setting);