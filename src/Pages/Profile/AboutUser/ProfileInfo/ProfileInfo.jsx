import React from "react";
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div className={s.profileAvatar}>
            <p className={s.userName}>Stella Jonathan</p>
            <p className={s.fontAbout}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae delectus doloribus minima minus voluptas.</p>
        </div>
    )
}
export default ProfileInfo;