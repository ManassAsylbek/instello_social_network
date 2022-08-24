import React from "react";
import s from './Explorer.module.css';
import ExplorerImage from "./ExplorerImage/ExplorerImage";

const Explorer = (props) => {

   /* let explorerElement=props.explorerData.map(exp =><ExplorerImage img={exp.img}/> )*/

    return (

        <div className={s.explorer}>
            <p  className={s.text}>Explorer</p>
            {props.explorerData.map(exp =><ExplorerImage img={exp.img}/> )}
        </div>
    )
}
export default Explorer;