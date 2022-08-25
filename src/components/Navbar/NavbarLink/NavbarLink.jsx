import React from "react";
import s from './NavbarLink.module.css';
import {NavLink} from "react-router-dom";
const NavbarLink = ()=> {


    return <nav className="nav">
        <div  className={s.item}>
            <NavLink className={(navData) => navData.isActive? s.active:''} to="/feed">Feed</NavLink>
        </div>
        <div  className={s.item}>
            <NavLink className={(navData) => navData.isActive? s.active:''} to="/explore">Explore</NavLink>
        </div>
        <div  className={s.item}>
            <NavLink className={(navData) => navData.isActive? s.active:''} to="/messages">Messages</NavLink>
        </div>
        <div  className={s.item}>
            <NavLink className={(navData) => navData.isActive? s.active:''} to="/trending">Trending</NavLink>
        </div>
        <div  className={s.item}>
            <NavLink className={(navData) => navData.isActive? s.active:''} to="/marketplace">Marketplace</NavLink>
        </div>
        <div  className={s.item}>
            <NavLink className={(navData) => navData.isActive? s.active:''} to="/setting">Setting</NavLink>
        </div>
        <div  className={s.item}>
            <NavLink className={(navData) => navData.isActive? s.active:''} to="/">My Profile</NavLink>
        </div>
    </nav>
}
export default NavbarLink;