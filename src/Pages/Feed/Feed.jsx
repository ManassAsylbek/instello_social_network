import React from "react";
import s from './Feed.module.css';
import FeedBlog from "./FeedBlog/FeedBlog";
import {Outlet} from "react-router";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const Feed =(props)=>{
    return (
        <div className={s.feedWrapper}>
          <FeedBlog/>
            <Outlet />
        </div>
    )
}

export default compose( WithAuthRedirect)(Feed);