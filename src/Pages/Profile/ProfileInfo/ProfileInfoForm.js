import React from "react";
import {createField, FormsInput, FormsTextArea} from "../../../components/Comman/formsControl/FormsControl";
import {Field, reduxForm} from "redux-form";
import s from "../Profile.module.css";
import Contacts from "./Contacts";


const ProfileInfoForm = ({handleSubmit, isOwner, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {isOwner && <button>Save</button>}
            {error && <div>
                <span style={{color:"red"}}>{error}</span>
            </div>}
            <div className={s.profileAvatar}>
                <label>fullName :</label>
                <span>{createField("fullName", 'fullName', [], FormsInput)}</span>
            </div>
            <div>
                <b>looking for
                    job:</b> {createField("", "lookingForAJob", [], FormsInput, {type: "checkbox"}, "remember me")}
            </div>
            <div>
                <b>lookingForAJobDescription:</b>{createField("My skills", "lookingForAJobDescription", [], FormsTextArea)}
            </div>

            <div>
                <b>About Me:</b> {createField("About Me", 'aboutMe', [], FormsTextArea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts)
                .map((key) => <div key={key} contactTitle={key}
                                   contactValue={profile.contacts[key]}>
                    <b>{key}</b>{createField(key, 'Contacts.' + key, [], FormsInput)}
                </div>)}
            </div>


        </form>
    )
}

const ProfileInfoFormReduxForm = reduxForm({form:"edit-Profile", destroyOnUnmount: false})(ProfileInfoForm)
export default ProfileInfoFormReduxForm

