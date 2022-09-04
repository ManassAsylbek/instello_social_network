import s from "../Profile.module.css";
import React from "react";

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b> <b>{contactValue}</b>
    </div>
}
export default Contacts