import React from "react";
import s from './Marketplace.module.css';
import {compose} from "redux";
import WithAuthRedirect from "../../HOC/withAuthRedirect";

const Marketplace =(props)=>{
    return (
        <div>
        MARKETPLACE
        </div>
    )
}

export default compose( WithAuthRedirect)(Marketplace);