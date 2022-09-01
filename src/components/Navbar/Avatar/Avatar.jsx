import React from "react";
import s from './Avatar.module.css';
import userImg from '../../../assets/image/avatar-2.jpg'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";

const Avatar = (props) => {
    return <header className={s.avatar}>
        <NavLink className={s.navLink} to="/profile">
            <img className={s.image}
                 src={props.profile
                     ? props.profile.photos.large
                     : userImg} alt=""/>
        </NavLink>
    </header>
}


export default Avatar;