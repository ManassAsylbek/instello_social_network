import React, {useState} from 'react';
import s from "./Profile.module.css";
import userPh from "../../assets/squadImage/images.png"
import addFileImg from "../../assets/addFile.svg"

import ExplorerContainer from "./AboutUser/Explorer/ExplorerContainer";
import FeedBlog from "../Feed/FeedBlog/FeedBlog";
import Preloader from "../../components/Comman/Preloader/Preloader";
import ProfileStatus from "./Profile.Status/ProfileStatus";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoFormReduxForm from "./ProfileInfo/ProfileInfoForm";

const Profile = (props) => {
    const [editMode, setEditMode] = useState(false)
    const onMainPhotoSelector = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    const onSubmit = (formData) => {
       props.saveProfile(formData).then(
           ()=>{
               setEditMode(false)
           }
       )
      
    }

    return (
        <> {!props.profile && <Preloader/>}
            {props.profile && <div>
                <div className={s.userInform}>
                    <div>
                        <div className={s.profileImage}>
                            {props.profile.photos.large
                                ? <img className={s.image} src={props.profile.photos.large} alt=""/>
                                : <img className={s.image} src={userPh} alt=""/>
                            }

                        </div>

                        {props.isOwner && <label htmlFor="inputTag" className={s.addFile}>
                            <img src={addFileImg} alt=""/>
                            <span>Добавьте фото профиля</span>
                            <input className={s.file} id="inputTag" onChange={onMainPhotoSelector} type="file"/>
                        </label>
                        }
                        <ProfileStatus getUpdateStatus={props.getUpdateStatus}
                                       status={props.status}
                        />
                        <div className={s.button}>
                            <button className={s.addFriend} type="submit">addFriend</button>
                            <button className={s.sendMessege} type="submit">sendMessege</button>
                        </div>
                    </div>
                    {
                        editMode
                            ? <ProfileInfoFormReduxForm


                                onSubmit={onSubmit}
                                initialValues={props.profile}
                                profile={props.profile}
                                isOwner={props.isOwner}/>
                            : <ProfileInfo
                                profile={props.profile}
                                goToEditMode={() => setEditMode(true)}
                                isOwner={props.isOwner}/>
                    }


                </div>

                <ExplorerContainer/>
                <FeedBlog/>
            </div>}
        </>
    );
};


export default Profile;