import React from "react";
import s from './FeedBlog.module.css';
import FeedBlogAction from "./FeedBlogAction/FeedBlogAction";
import FeedBlogPost from "./FeedBlogPost/FeedBlogPost";
import FeedBlogHeader from "./FeedBlogHeader/FeedBlogHeader";
import FeedBlogCommentContainer from "./FeedBlogComment/FeedBlogCommentContainer";


const FeedBlog = (props) => {

    return (
        <div>
            <span className="titleName">Feed</span>
            <div className={s.feedBlog}>
                <FeedBlogHeader/>
                <FeedBlogPost/>
                <FeedBlogAction/>
                <FeedBlogCommentContainer/>
            </div>
        </div>
    )
}

export default FeedBlog;