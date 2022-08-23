import React from "react";
import s from './Navbarheader.module.css'
import logo from "../../../assets/image/logo.png"
import bulb from "../../../assets/image/bulb.png"
const NavbarHeader = () => {
    return <header className={s.navbarHeader}>
        <img className={s.logo} src={logo} alt=""/>
        <img className={s.navbarHeaderButton} src={bulb} alt=""/>
    </header>
}

export default NavbarHeader;

