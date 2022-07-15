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
import {Route,Routes} from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Explore from "./components/Explore/Explore";
import Trending from "./components/Trending/Trending";
import Marketplace from "./components/Marketplace/Marketplace";
import Setting from "./components/Setting/Setting";
import MessagesPage from "./components/Messages/MessagesPage";




const App = (props) => {


    return (

            <div className="appWrapper">
                <Header/>
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
                    <Navbar/>
                </div>
                <div className="appWrapperContent">
                    <Routes>
                        <Route path="/feed" element={<Feed />}/>
                        <Route path="/explore" element={<Explore/>}/>
                        <Route path="/messages" element={<MessagesPage/>}/>
                        <Route path="/trending" element={<Trending/>}/>
                        <Route path="/marketplace" element={<Marketplace/>}/>
                        <Route path="/setting" element={<Setting/>}/>
                        <Route path="/profile" element={<AboutUser />}/>
                    </Routes>
                </div>

            </div>

    );
}


export default App;
