import React from "react";
import style from './ExplorePage.module.css';
import userPhoto from "../../assets/squadImage/images.png"
import {NavLink} from "react-router-dom";



const ExplorePage = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.explore}>
            <span className={style.title}>Explore</span>
            <div className={style.search}>
                {
                    props.interestData.map(u => <div className={style.searchItem}>{u}</div>)
                }
            </div>
            <div className={style.users}>
                {
                    props.users.map((u, i) =>

                        <div key={'u.id'} className={style.userPhoto}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.large != null
                                    ? u.photos.small
                                    : i > 8
                                        ? userPhoto
                                        : props.usersPhotoData.filter((photo, i1) => i === i1)} alt=""/>
                                /*сложо, но можно понять - это кастыль */
                            </NavLink>
                            <div className={style.userN}>
                                <span className={style.userName}>{u.name}</span>
                                <span className={style.like}>{u.id}</span>
                                <span className={style.post}>{'u.post'}</span><br/>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id=>id===u.id)}

                                              onClick={() => {props.unFollow(u.id)}}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id=>id===u.id)}

                                              onClick={() => {props.follow(u.id)}}>Follow</button>
                                }
                            </div>

                        </div>
                    )
                }
            </div>
            <button onClick={() => props.onAddPage()} className={style.btn}>Load more..</button>
            <div>
                {pages.map(p => <div className={props.currentPage === p ? style.selected : style.pageNumber}
                                     onClick={() => props.onPageChanged(p)}>{p}</div>)}
            </div>
        </div>

    )
}

export default ExplorePage;