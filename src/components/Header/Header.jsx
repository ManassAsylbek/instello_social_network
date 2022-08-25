import React from "react";
import s from './Header.module.css'
import search from "../../assets/image/search.png"
import add from "../../assets/image/add.png"
import bell from "../../assets/image/bell.png"
import comment_alt from "../../assets/image/comment-alt.png"
import avatar_2 from "../../assets/image/avatar-2.jpg"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.search}><img src={search} alt=""/></div>
        <div className={s.input}><input placeholder="Search.." type="text"/><br/></div>
        <button className={s.addLogo}><img src={add} alt=""/>Upload</button>
        <div className={s.bell}><img src={bell} alt=""/></div>
        <div className={s.comment}><img src={comment_alt} alt=""/></div>
        <div className={s.image}><NavLink to="/login">{props.isAuth
            ? <>
                <img src={avatar_2} alt=""/>
                <span>{props.login}</span>
            </>
            :
            <span>login</span>} </NavLink></div>
    </header>
}
export default Header;