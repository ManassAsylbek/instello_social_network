import React from "react";
import s from'./Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = ()=> {
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
            <NavLink className={(navData) => navData.isActive? s.active:''} to="profile">My Profile</NavLink>
        </div>
    </nav>
}
export default Navbar;