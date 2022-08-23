import React from "react";
import s from './Avatar.module.css';
import userImg from '../../../assets/image/avatar-2.jpg'
import {NavLink} from "react-router-dom";

const Avatar= ()=> {
    return  <header className={s.avatar}>
        <NavLink className={s.navLink} to="/profile"><img className={s.image} src={userImg} alt=""/> </NavLink>
    </header>
}

export default Avatar;