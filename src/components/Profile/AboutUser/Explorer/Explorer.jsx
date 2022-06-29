import React from "react";
import s from './Explorer.module.css';
import ExplorerImage from "./ExplorerImage/ExplorerImage";
import post_1 from "../../../../assets/image/post1.jpg"
const Explorer = () => {
    return (
        <div className={s.explorer}>
            <p  className={s.text}>Explorer</p>
            <ExplorerImage image={post_1}/>
            <ExplorerImage  />
            <ExplorerImage />
            <ExplorerImage />
            <ExplorerImage />
            <ExplorerImage />
            <ExplorerImage />
            <ExplorerImage />
        </div>
    )
}
export default Explorer;