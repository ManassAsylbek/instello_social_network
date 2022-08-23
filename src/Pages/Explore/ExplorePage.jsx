import React from "react";
import style from './ExplorePage.module.css';

import userPhoto from "../../assets/squadImage/images.png"


const ExplorePage = (props) => {

    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize);

    let pages=[];
    for (let i=1; i<pageCount;i++){
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
                    props.users.map((u,i) =>

                        <div key={'u.id'} className={style.userPhoto}>

                            <img src={u.photos.small != null
                                ?u.photos.small
                                :i>8
                                    ? userPhoto
                                    : props.usersPhotoData.filter((photo,i1)=>i===i1?true:false)} alt=""/>
                                /*сложо, но можно понять - это кастыль */
                            <div className={style.userN}>
                                <span className={style.userName}>{u.name}</span>
                                <span className={style.like}>{'u.like'}</span>
                                <span className={style.post}>{'u.post'}</span><br/>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                        }
                                    }>Follow</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <button onClick={()=>props.onAddPage()} className={style.btn}>Load more..</button>
           {/* <div>
                {pages.map(p=> <div className={props.currentPage===p?style.selected:style.pageNumber}
                                     onClick={()=>props.onPageChanged(p)}>{p}</div>)}
            </div>*/}
        </div>

    )
}

export default ExplorePage;