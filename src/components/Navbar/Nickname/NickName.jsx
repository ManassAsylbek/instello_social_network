import React from "react";
import s from './Nickname.module.css'
import {NavLink} from "react-router-dom";
const NickName= ()=> {
    return  <div className={s.nickName}>
        <NavLink to="profile">Stella Johnson</NavLink>
    </div>
}

export default NickName;