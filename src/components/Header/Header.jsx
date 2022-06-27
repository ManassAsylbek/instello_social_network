import React from "react";
import s from './Header.module.css'
const Header= ()=> {
    return  <header className={s.header}>
        <div className={s.search}><img src="search.png" alt=""/></div>
        <div className ={s.input}><input placeholder="Search.."  type="text"/><br/></div>
        <button className ={s.addLogo}><img  src="add.png" alt=""/>Upload</button>
        <div className ={s.bell}><img src="bell.png" alt=""/></div>
        <div className ={s.comment}><img  src="comment-alt.png" alt=""/></div>
        <div className ={s.image}><img src="avatar-2.jpg" alt=""/></div>
    </header>
}
export default Header;