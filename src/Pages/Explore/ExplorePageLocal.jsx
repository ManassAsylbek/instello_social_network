import React from "react";
import style from './ExplorePage.module.css';
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";
import avatar_4 from "../../assets/image/avatar-4.jpg";
import avatar_7 from "../../assets/squadImage/img8.jpg";
import avatar_2 from "../../assets/squadImage/img6.jpg";
import avatar_3 from "../../assets/image/img3.jpg";
import avatar_5 from "../../assets/squadImage/img2.jpg";
import avatar_8 from "../../assets/squadImage/img4.jpg";
import avatar_9 from "../../assets/squadImage/img5.jpg";


const ExplorePageLocal = (props) => {
    /*if (props.usersData.length === 0){
        axios.get("")
        props.setUsers( [
            )
    }*/

    return (<div className={style.explore}>
            <span className={style.title}>Explore</span>
            <div className={style.search}>
                {
                    props.interestData.map(u => <div className={style.searchItem}>{u}</div>)
                }
            </div>
            <div className={style.users}>
                {
                    props.users.map(u =>

                        <div key={u.id} className={style.userPhoto}>
                            <img src={u.photos} alt=""/>
                            <div className={style.userN}>
                                <span className={style.userName}>{u.name}</span>
                                <span className={style.like}>{u.like}</span>
                                <span className={style.post}>{u.post}</span>
                                {u.followed
                                    ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

                            </div>


                        </div>)
                }
            </div>
        </div>
    )
}


export default ExplorePageLocal;