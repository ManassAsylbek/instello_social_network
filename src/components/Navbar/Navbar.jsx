import React from "react";
import s from'./Navbar.module.css';
const Navbar = ()=> {
    return <nav className="nav">
        <div  className={s.item}>
            <a href="#">Profile</a>
        </div>
        <div  className={s.item}>
            <a href="#">Messeges</a>
        </div>
        <div  className={s.item}>
            <a href="#">News</a>
        </div>
        <div  className={s.item}>
            <a href="#">Music</a>
        </div>
        <div  className={s.item}>
            <a href="#">Setting</a>
        </div>
    </nav>
}
export default Navbar;