import React from "react";
import s from './ExplorerImage.module.css';

const ExplorerImage = () => {
    return (
        <div className={s.posts}>
            <img className={s.image} src="post1.jpg" alt=""/>
        </div>
    )
}
export default ExplorerImage;