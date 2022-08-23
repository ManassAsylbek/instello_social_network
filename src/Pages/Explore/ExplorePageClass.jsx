import React from "react";
import style from './ExplorePage.module.css';
import * as axios from "axios";



class ExplorePageClass extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUseCount(response.data.totalCount)
                }
            );
    }

    /*   getUsers = () => {
           if (this.props.usersData.length === 0) {


           }
       }*/
    onAddPage=()=>{
        this.props.setLoadPage(this.props.loadPage+1)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage+1}&count=${8}`)
            .then(response => {

                    this.props.setAddUsers(response.data.items)
                }
            );

    }

    onPageChanged = (p) =>{
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${9}`)
            .then(response => {

                    this.props.setUsers(response.data.items)
                }
            );
    }


    render() {
        let pageCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages=[];
        for (let i=1; i<pageCount;i++){
            pages.push(i)
        }
        return (
            <div className={style.explore}>
                <span className={style.title}>Explore</span>


                <div className={style.search}>
                    {
                        this.props.interestData.map(u => <div key={u} className={style.searchItem}>{u}</div>)
                    }
                </div>
                <div className={style.users}>
                    {
                        this.props.users.map((u,i) =>

                            <div key={u.id} className={style.userPhoto}>

                                <img src={u.photos.small != null?u.photos.small:
                                    this.props.usersPhotoData.filter((photo,i1)=>i===i1)} alt=""/>
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
                <button onClick={()=>this.onAddPage()} className={style.btn}>Load more..</button>
                <div>
                {pages.map(p=> <span className={this.props.currentPage===p?style.selected:style.pageNumber}
                onClick={()=>this.onPageChanged(p)}>{p}</span>)}
                </div>

            </div>

        )
    }


}

export default ExplorePageClass;