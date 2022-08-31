import React, {useState} from "react";
import style from './ExplorePage.module.css';

import Paginator from "../../components/Comman/Paginator/Paginator";
import Users from "./Users/Users";
import Preloader from "../../components/Comman/Preloader/Preloader";
import {setPortionNumber} from "../../Redux/Reducer/Explore_Reducer";



const ExplorePage = (props) => {

    return (
        <div className={style.explore}>
            <span className={style.title}>Explore</span>
            <div className={style.search}>
                {
                    props.interestData.map(user =>  <div key={user} className={style.searchItem}>{user}</div>)
                }
            </div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       setPortionNumber={props.setPortionNumber}
                       portionNumber={props.portionNumber}
            />
            {props.isFetching && <Preloader/>}
            <div className={style.users}>

                {
                    !props.isFetching && props.users.map((user, i) =><Users user={user} index={i} key={user.id}
                                                    usersPhotoData={props.usersPhotoData}
                                                    followingInProgress={props.followingInProgress}
                                                    unFollow={props.unFollow}
                                                    follow={props.follow}
                        />

                    )
                }
            </div>
            <button onClick={() => props.onAddPage()} className={style.btn}>Load more..</button>

        </div>

    )
}

export default ExplorePage;