import React from "react";
import s from'./Navbar.module.css';
const Navbar = ()=> {
    return <nav className="nav">
        <div  className={s.item}>
            <a href="/feed">Feed</a>
        </div>
        <div  className={s.item}>
            <a href="/explore">Explore</a>
        </div>
        <div  className={s.item}>
            <a href="/dialogs">Messages</a>
        </div>
        <div  className={s.item}>
            <a href="/trending">Trending</a>
        </div>
        <div  className={s.item}>
            <a href="/marketplace">Marketplace</a>
        </div>
        <div  className={s.item}>
            <a href="/Setting">Setting</a>
        </div>
        <div  className={s.item}>
            <a href="profile">My Profile</a>
        </div>
    </nav>
}
export default Navbar;