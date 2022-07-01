import React from "react";
import s from './Feed.module.css';
import FeedBlog from "./FeedBlog/FeedBlog";

const Feed =(props)=>{
    return (
        <div className={s.feedWrapper}>
          <FeedBlog feedPage={props.feedPage}/>
        </div>
    )
}

export default Feed;