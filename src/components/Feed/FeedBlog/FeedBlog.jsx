import React from "react";
import s from './FeedBlog.module.css';
import FeedBlogComment from "./FeedBlogComment/FeedBlogComment";
import FeedBlogAction from "./FeedBlogAction/FeedBlogAction";
import FeedBlogPost from "./FeedBlogPost/FeedBlogPost";
import FeedBlogHeader from "./FeedBlogHeader/FeedBlogHeader";

const FeedBlog = (props) => {
    return (
        <div className={s.feedBlog}>
            <FeedBlogHeader/>
            <FeedBlogPost/>
            <FeedBlogAction/>
            <FeedBlogComment/>
        </div>
    )
}

export default FeedBlog;