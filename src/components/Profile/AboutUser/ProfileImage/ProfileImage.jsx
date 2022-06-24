import React from "react";
import s from './ProfileImage.module.css'
const ProfileImage = () => {
    return (
        <div className={s.profileImage}>
            <img className={s.image} src="avatar-7.jpg" alt=""/>
        </div>


    )
}
export default ProfileImage;