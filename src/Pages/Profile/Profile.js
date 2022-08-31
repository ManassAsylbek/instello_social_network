import React from 'react';
import s from "./Profile.module.css";
import userPh from "../../assets/squadImage/images.png"

import ExplorerContainer from "./AboutUser/Explorer/ExplorerContainer";
import FeedBlog from "../Feed/FeedBlog/FeedBlog";
import Preloader from "../../components/Comman/Preloader/Preloader";
import ProfileStatus from "./Profile.Status/ProfileStatus";

const Profile = (props) => {

    return (
        <> {!props.profile && <Preloader/>}
            {props.profile && <div>
                <div className={s.userInform}>
                    <div className={s.profileImage}>
                        {props.profile.photos.large
                            ? <img className={s.image} src={props.profile.photos.large} alt=""/>
                            : <img className={s.image} src={userPh} alt=""/>
                        }
                    </div>
                    <div>
                        <div className={s.profileAvatar}>
                            <p className={s.userName}>{props.profile.fullName}</p>
                            <p className={s.fontAbout}>
                                {props.profile.aboutMe}
                            </p>
                        </div>
                        <div>
                            <p>контакты</p>
                            <ul>
                                <li><a href={`${props.profile.contacts.github}`}>{props.profile.contacts.github}</a>
                                </li>
                                <li><a
                                    href={`${props.profile.contacts.instagram}`}>{props.profile.contacts.instagram}</a>
                                </li>
                                <li><a href={`${props.profile.contacts.facebook}`}>{props.profile.contacts.facebook}</a>
                                </li>

                            </ul>
                        </div>
                        <ProfileStatus getUpdateStatus={props.getUpdateStatus}
                                       status={props.status}
                        />

                        <div className={s.button}>
                            <button className={s.addFriend} type="submit">addFriend</button>
                            <button className={s.sendMessege} type="submit">sendMessege</button>
                        </div>
                    </div>
                </div>

                <ExplorerContainer/>
                <FeedBlog/>
            </div>}
        </>
    );
};

export default Profile;