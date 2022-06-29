import React from "react";
import s from "./AboutUser.module.css";

import ProfileImage from "./ProfileImage/ProfileImage";
import Buttons from "./Buttons/Buttons";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Explorer from "./Explorer/Explorer";


const AboutUser = () => {
    return (
        <div>
            <div className={s.userInform}>
                <ProfileImage/>
                <ProfileInfo/>
                <Buttons/>
            </div>
            <Explorer/>
        </div>
    )
}
export default AboutUser;