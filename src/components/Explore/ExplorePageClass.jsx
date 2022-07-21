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
                {/*<button onClick={getUsers}>Get Users</button>*/}

                <div className={style.search}>
                    {
                        props.interestData.map(u => <div className={style.searchItem}>{u}</div>)
                    }
                </div>
                <div className={style.users}>
                    {
                        props.users.map(u =>

                            <div key={'u.id'} className={style.userPhoto}>
                                <img src={u.photos.small != null?u.photos.small:userPhoto} alt=""/>
                                <div className={style.userN}>
                                    <span className={style.userName}>{u.name}</span>
                                    <span className={style.like}>{'u.like'}</span>
                                    <span className={style.post}>{'u.post'}</span>
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
            </div>

        )
    }


}

export default ExplorePageClass;