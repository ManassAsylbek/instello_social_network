import React from "react";
import s from './Explorer.module.css';
import ExplorerImage from "./ExplorerImage/ExplorerImage";

const Explorer = (props) => {



    return (

        <div className={s.explorer}>
            <p  className={s.text}>Explorer</p>
            {props.explorerData.map(exp =><ExplorerImage key={exp.img} img={exp.img}/> )}
        </div>
    )
}
export default Explorer;