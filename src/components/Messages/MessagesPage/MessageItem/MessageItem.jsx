import React from "react";
import s from './MessageItem.module.css';
import {NavLink} from "react-router-dom";



const MessageItem = (props) => {

    return (
        <div className={s.message + " " + s.active}>
            <NavLink className={s.navLink} to={`/messages/${props.id}`}><img src={props.src} alt=""/>{props.name}
            </NavLink>
        </div>
    )
}

export default  MessageItem;