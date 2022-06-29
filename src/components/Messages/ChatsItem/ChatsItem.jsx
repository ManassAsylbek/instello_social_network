import React from "react";
import s from './ChatsItem.module.css';



const ChatsItem = (props) => {
    return (
        <div>
            <div className={s.chat}>{props.message}</div>
        </div>
    )
}

export default  ChatsItem;