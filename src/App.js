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
import Dialogs from "./components/Dialogs/Dialogs";






const App = () => {
    return (
        <div className="appWrapper">
            <Header />
            <div className='appWrapperNavbar'>
                <NavbarHeader/>
                <div className="appWrapperAvatar">
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
            <div className="appWrapperContent">
                <Dialogs/>
                {/*<AboutUser/>*/}
            </div>

        </div>
    );
}




export default App;
