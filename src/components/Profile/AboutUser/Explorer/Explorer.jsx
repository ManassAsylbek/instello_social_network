import React from "react";
import s from './Explorer.module.css';
import ExplorerImage from "./ExplorerImage/ExplorerImage";
const Explorer = () => {
    return (
        <div className={s.explorer}>
            <p  className={s.text}>Explorer</p>
            <ExplorerImage />
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