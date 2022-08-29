import React, {useEffect} from "react";
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
import {compose} from "redux";
import withRouter from "./HOC/withRouter";
import {connect} from "react-redux";
import Preloader from "./components/Comman/Preloader/Preloader";
import {initializeApp} from "./Redux/Reducer/app_Reducer";


class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (<>
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
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);
