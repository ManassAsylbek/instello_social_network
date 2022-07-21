import React from "react";
import style from './ExplorePage.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/image/avatar-4.jpg";


class ExplorePageClass extends React.Component{

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            }
        );
    }

 /*   getUsers = () => {
        if (this.props.usersData.length === 0) {


        }
    }*/

    render() {
        return (
            <div className={style.explore}>
                <span className={style.title}>Explore</span>


                <div className={style.search}>
                    {
                        this.props.interestData.map(u => <div className={style.searchItem}>{u}</div>)
                    }
                </div>
                <div className={style.users}>
                    {
                        this.props.users.map((u,i) =>

                            <div key={'u.id'} className={style.userPhoto}>

                                <img src={u.photos.small != null?u.photos.small:
                                    this.props.usersPhotoData.filter((photo,i1)=>i===i1?true:false)} alt=""/>
                                /*сложо, но можно понять - это кастыль */
                                <div className={style.userN}>
                                    <span className={style.name} className={style.userName}>{u.name}</span>
                                    <span className={style.like}>{'u.like'}</span>
                                    <span className={style.post}>{'u.post'}</span><br/>
                                    {u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }
                                        }>Follow</button>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        )
    }


}

export default ExplorePageClass;