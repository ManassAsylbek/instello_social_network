import React from "react";
import s from './Navbarheader.module.css'
const NavbarHeader = () => {
    return <header className={s.navbarHeader}>
        <img className={s.logo} src="logo.png" alt=""/>
        <img className={s.navbarHeaderButton} src="bulb.png" alt=""/>
    </header>
}

export default NavbarHeader;

