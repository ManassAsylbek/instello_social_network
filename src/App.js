import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Feed from "./Pages/Feed/Feed";
import Setting from "./Pages/Setting/Setting";
import MessagesPage from "./Pages/Messages/MessagesPage";
import Marketplace from "./Pages/Marketplace/Marketplace";
import Trending from "./Pages/Trending/Trending";
import Navbar from "./components/Navbar/Navbar";
import ExplorePageContainer from "./Pages/Explore/ExplorePageContainer";
import ContainerProfile from "./Pages/Profile/ProfileContainer";
import ContainerLoginPage from "./Pages/Login/ContainerLoginPage";


const App = (props) => {


    return (
        <>
            <div>

                <div className="appWrapper">
                    <Header/>
                    <Navbar/>
                    <div className="appWrapperContent">
                        <Routes>

                            <Route path="/login" element={<ContainerLoginPage/>}/>

                            <Route path="/feed" element={<Feed/>}/>
                            <Route path="/explore" element={<ExplorePageContainer/>}/>
                            <Route path="/messages" element={<MessagesPage/>}/>
                            <Route path="/trending" element={<Trending/>}/>
                            <Route path="/marketplace" element={<Marketplace/>}/>
                            <Route path="/setting" element={<Setting/>}/>
                            <Route path="/" element={<ContainerProfile/>}/>
                            <Route path="/profile/:userId" element={<ContainerProfile/>}/>

                        </Routes>
                    </div>
                </div>

            </div>

        </>
    );
}


export default App;
