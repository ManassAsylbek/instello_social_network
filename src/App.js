import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import AboutUser from "./components/Profile/AboutUser/AboutUser";
import Header from "./components/Header/Header";
import NavbarHeader from "./components/NavbarHeader/NavbarHeader";

import NickName from "./components/Nickname/NickName";
import Post from "./components/Post/Post";
import Following from "./components/Fallowing/Following";
import Follower from "./components/Fallower/Follower";
import Avatar from "./components/Avatar/Avatar";





const App = () => {
    return (
        <div className="appWrapper">
            <Header />
            <div className='navbarWrapper'>
                <NavbarHeader/>
                <div className="avatarWrapper">
                    <Avatar/>
                    <NickName />
                    <div className="follow">
                        <Post />
                        <Following />
                        <Follower />

                    </div>
                </div>
                <Navbar />
            </div>
            <AboutUser/>

        </div>
    );
}




export default App;
