import React from 'react';
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import Avatar from "./Avatar/Avatar";
import NickName from "./Nickname/NickName";
import Post from "./Post/Post";
import Following from "./Fallowing/Following";
import Follower from "./Fallower/Follower";
import NavbarLink from "./NavbarLink/NavbarLink";
import {connect} from "react-redux";

const Navbar = (props) => {
    return (
        <div className='appWrapperNavbar'>
            <NavbarHeader/>
            <div className="appWrapperAvatar">
                <Avatar profile={props.profile}/>

                <NickName login={props.login}/>

                <div className="follow">
                    <Post/>
                    <Following/>
                    <Follower/>

                </div>
            </div>
            <NavbarLink/>
        </div>
    );
};
let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        profile: state.profilePage.selfProfile,
    }
}

export default connect(mapStateToProps)(Navbar);