import React from "react";
import style from './ExplorePage.module.css';


const ExplorePage = (props) => {


    return (<div className={style.explore}>
            <span className={style.title}>Explore</span>
            <div className={style.search}>
                {
                    props.interestData.map(u => <div className={style.searchItem}>{u}</div>)
                }
            </div>
            <div className={style.users}>
                {
                    props.usersData.map(u =>
                        <div key={u.id} className={style.user}>
                            <div className={style.userPhoto}>
                                <img src={u.img} alt=""/>
                                <div className={style.userN}>
                                    <span className={style.userName}>{u.name}</span>
                                    <span className={style.like}>{u.like}</span>
                                    <span className={style.post}>{u.post}</span>
                                    <button>Follow</button>
                                </div></div>

                        </div>)
                }
            </div>
        </div>
    )
}

export default ExplorePage;