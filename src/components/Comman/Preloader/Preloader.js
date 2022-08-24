import React from 'react';
import preloader from "../../../assets/animation/Spinner-1s-200px.gif";
import style from "./Preloader.module.css"

const Preloader = (props) => {
    return (
        <div style={{background:"white"}} className={style.preloader}>
            <img  src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;