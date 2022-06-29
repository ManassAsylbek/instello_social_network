import React from "react";
import s from './Avatar.module.css';
import userImg from '../../assets/image/avatar-2.jpg'

const Avatar= ()=> {
    return  <header className={s.avatar}>
        <img className={s.image} src={userImg} alt=""/>
    </header>
}

export default Avatar;