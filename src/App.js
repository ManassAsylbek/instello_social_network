import React from "react";
import './App.css';

import {Route, Routes} from "react-router-dom";
import Feed from "./Pages/Feed/Feed";
import Setting from "./Pages/Setting/Setting";
import MessagesPage from "./Pages/Messages/MessagesPage";
import Marketplace from "./Pages/Marketplace/Marketplace";
import Trending from "./Pages/Trending/Trending";
import ExplorePageContainer from "./Pages/Explore/ExplorePageContainer";
import ContainerProfile from "./Pages/Profile/ProfileContainer";
import ContainerLoginPage from "./Pages/Login/ContainerLoginPage";
import MainPage from "./Pages/Main/MainPage";


const App = (props) => {


    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route path="/feed" element={<Feed/>}/>
                    <Route path="/explore" element={<ExplorePageContainer/>}/>
                    <Route path="/messages" element={<MessagesPage/>}/>
                    <Route path="/trending" element={<Trending/>}/>
                    <Route path="/marketplace" element={<Marketplace/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                    <Route path="/profile" element={<ContainerProfile/>}/>
                    <Route path="/profile/:userId" element={<ContainerProfile/>}/>
                </Route>
                <Route path="/login" element={<ContainerLoginPage/>}/>

            </Routes>
        </>
    );
}

export default App;
