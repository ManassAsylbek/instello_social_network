import React from "react";
import s from './Trending.module.css';
import {compose} from "redux";
import WithAuthRedirect from "../../HOC/withAuthRedirect";

const Trending =(props)=>{
    return (
        <div>
            TRENDING
        </div>
    )
}

export default compose( WithAuthRedirect)(Trending);