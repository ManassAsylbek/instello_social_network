import React from 'react';
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import Avatar from "./Avatar/Avatar";
import NickName from "./Nickname/NickName";
import Post from "./Post/Post";
import Following from "./Fallowing/Following";
import Follower from "./Fallower/Follower";
import NavbarLink from "./NavbarLink/NavbarLink";

const Navbar = () => {
    return (
        <div className='appWrapperNavbar'>
            <NavbarHeader/>
            <div className="appWrapperAvatar">
                <Avatar/>

                <NickName/>

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

export default Navbar;