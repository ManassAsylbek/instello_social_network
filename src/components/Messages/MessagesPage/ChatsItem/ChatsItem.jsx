import React from "react";
import s from './ChatsItem.module.css';



const ChatsItem = (props) => {
    return (
        <div className={s.chatsItemAvatar}>
            <img className={s.image} src={props.img} alt=""/>
            <div className={s.chat}>{props.message}</div>
        </div>
    )
}

export default  ChatsItem;