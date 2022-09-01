import React from "react";
import s from './Nickname.module.css'
import {NavLink} from "react-router-dom";
const NickName= (props)=> {
    return  <div className={s.nickName}>
        <NavLink to="profile">{props.login}</NavLink>
    </div>
}

export default NickName;