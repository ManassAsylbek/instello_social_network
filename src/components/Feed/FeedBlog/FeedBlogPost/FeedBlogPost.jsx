import React from "react";
import s from './FeedBlogPost.module.css';
import postImg from '../../../../assets/image/img4.jpg'
const FeedBlogPost = (props) => {
    return (
        <div className={s.feedBlogPost}>
            <img src={postImg} alt=""/>
        </div>
    )
}

export default FeedBlogPost;