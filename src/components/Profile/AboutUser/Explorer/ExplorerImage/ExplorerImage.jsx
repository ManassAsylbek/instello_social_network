import React from "react";
import s from './ExplorerImage.module.css';

const ExplorerImage = (props) => {
    return (
        <div className={s.posts}>
            <img className={s.image} src="post1.jpg" alt=""/>
            {props.name}
        </div>
    )
}
export default ExplorerImage;