import React from "react";
import s from './ProfileImage.module.css'
import avatar_7 from "../../../../assets/image/avatar-7.jpg"
const ProfileImage = () => {
    return (
        <div className={s.profileImage}>
            <img className={s.image} src={avatar_7} alt=""/>
        </div>


    )
}
export default ProfileImage;