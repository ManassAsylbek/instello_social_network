import React from "react";
import s from './Avatar.module.css';
const Avatar= ()=> {
    return  <header className={s.avatar}>
        <img className={s.image} src="avatar-2.jpg" alt=""/>
    </header>
}

export default Avatar;