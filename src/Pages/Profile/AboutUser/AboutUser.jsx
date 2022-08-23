import React from "react";
import s from "./AboutUser.module.css";

import ProfileImage from "./ProfileImage/ProfileImage";
import Buttons from "./Buttons/Buttons";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ExplorerContainer from "./Explorer/ExplorerContainer";


const AboutUser = (props) => {
    return (
        <div>
            <div className={s.userInform}>
                <ProfileImage/>
                <ProfileInfo/>
                <Buttons/>
            </div>
            <ExplorerContainer/>
        </div>
    )
}
export default AboutUser;