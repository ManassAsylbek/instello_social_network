import React from 'react';
import preloader from "../../../assets/animation/Spinner-1s-200px.gif";

const Preloader = (props) => {
    return (
        <div style={{background:"white"}}>
            <img className="preloader" src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;