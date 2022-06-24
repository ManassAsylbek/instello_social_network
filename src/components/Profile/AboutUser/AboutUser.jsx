import React from "react";
import s from "./AboutUser.module.css";

import ProfileImage from "./ProfileImage/ProfileImage";
import Buttons from "./Buttons/Buttons";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import Explorer from "./Explorer/Explorer";


const AboutUser = () => {
    return (
        <div className="aboutUser">
            <div className={s.userInform}>
                <ProfileImage/>
                <ProfileAvatar/>
                <Buttons/>
            </div>
            <Explorer/>
        </div>
    )
}
export default AboutUser;