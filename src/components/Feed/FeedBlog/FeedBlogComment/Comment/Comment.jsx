import React from "react";
import s from './Comment.module.css';



const Comment = (props) => {
    return(
        <div className={s.comment}>
            <div className={s.avatar}>
                <img className={s.image} src={props.user} alt=""/></div>
            <p>{props.comment}</p>
        </div>
    )

}



export default Comment;