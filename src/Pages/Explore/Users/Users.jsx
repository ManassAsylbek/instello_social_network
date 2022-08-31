import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/squadImage/images.png";

const Users =({user,index,...props})=>{
    return (
        <div  className={style.userPhoto}>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.large != null
                    ? user.photos.small
                    : index > 8
                        ? userPhoto
                        : props.usersPhotoData.filter((photo, i) => index === i)} alt=""/>
                /*сложо, но можно понять - это кастыль */
            </NavLink>
            <div className={style.userN}>
                <span className={style.userName}>{user.name}</span>
                <span className={style.like}>{user.id}</span>
                <span className={style.post}>{'u.post'}</span><br/>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id=>id===user.id)}

                              onClick={() => {props.unFollow(user.id)}}>Unfollow</button>

                    : <button disabled={props.followingInProgress.some(id=>id===user.id)}

                              onClick={() => {props.follow(user.id)}}>Follow</button>
                }
            </div>

        </div>
    )
}

export default Users;