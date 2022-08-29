import React from "react";
import s from './Feed.module.css';
import FeedBlog from "./FeedBlog/FeedBlog";
import {Outlet} from "react-router";

const Feed =(props)=>{
    return (
        <div className={s.feedWrapper}>
          <FeedBlog/>
            <Outlet />
        </div>
    )
}

export default Feed;