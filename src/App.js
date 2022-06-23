import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import NavbarHeader from "./components/NavbarHeader/NavbarHeader";
import Avatar from "./components/Avatar/Avatar";
import NickName from "./components/Nickname/NickName";
import Post from "./components/Post/Post";
import Following from "./components/Fallowing/Following";
import Follower from "./components/Fallower/Follower";



const App = () => {
    return (
        <div className="appWrapper">
            <Header />
            <div className='navbarWrapper'>
                <NavbarHeader/>
                <div className="avatarWrapper">
                    <Avatar />
                    <NickName />
                    <div className="follow">
                        <Post />
                        <Following />
                        <Follower />

                    </div>
                </div>
                <Navbar />
            </div>
            <Profile />
        </div>
    );
}




export default App;
