import React from "react";
import s from './FeedBlogHeader.module.css';
import {NavLink} from "react-router-dom";
import avatar_2 from "../../../../assets/image/avatar-2.jpg"

const FeedBlogHeader = (props) => {
    return (
        <div className={s.feedBlogHeader}>
            <NavLink className={s.navLink} to="/profile"><img  className={s.image} src={avatar_2} alt=""/>Stella Johnson
            </NavLink>

        </div>
    )
}

export default FeedBlogHeader;