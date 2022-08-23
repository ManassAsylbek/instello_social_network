import React from "react";
import s from './FeedBlogHeader.module.css';
import {NavLink} from "react-router-dom";
import avatar_2 from "../../../../assets/image/avatar-2.jpg"
import menu from "../../../../assets/image/menu-dots.png"

const FeedBlogHeader = (props) => {
    return (
        <div className={s.feedBlogHeader}>
            <NavLink className={s.navLink} to="/profile">
                <div className={s.avatar}>
                    <img className={s.image} src={avatar_2} alt=""/></div>
                <p>Stella Johnson</p>
            </NavLink>
            <img className={s.menuImage} src={menu} alt=""/>
        </div>
    )
}

export default FeedBlogHeader;