import s from "../Profile.module.css";
import React from "react";
import Contacts from "./Contacts";

const ProfileInfo = (props) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
            <div className={s.profileAvatar}>
                <span className={s.userName}> {props.profile.fullName}</span>
            </div>
            <div>
                <b>looking for job:</b>{props.profile.lookingForAJob ? <b>yes</b> : <b>no</b>}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My skill:</b> <b>{props.profile.lookingForAJobDescription}</b>
            </div>
            }
            <div>
                <b>About Me:</b> <b>{props.profile.aboutMe}</b>
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts)
                .map((key) => <Contacts key={key} contactTitle={key}
                                        contactValue={props.profile.contacts[key]}/>)}
            </div>

        </div>
    )
}
export default ProfileInfo