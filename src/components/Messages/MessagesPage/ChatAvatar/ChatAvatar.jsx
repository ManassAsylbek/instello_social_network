import React from "react";
import s from './ChatAvatar.module.css';
import avatar_1 from "../../../../assets/image/avatar-1.jpg";



const ChatAvatar = (props) => {
    return (
        <div className={s.commentAvatar}>
                <img className={s.image} src={avatar_1} alt=""/>
            <p>Sindy Forest</p>
        </div>
    )
}

export default  ChatAvatar;