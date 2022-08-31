import React, {Suspense} from "react";
import './App.css';

import {Route, Routes} from "react-router-dom";

import Setting from "./Pages/Setting/Setting";

import Marketplace from "./Pages/Marketplace/Marketplace";
import Trending from "./Pages/Trending/Trending";

import ContainerProfile from "./Pages/Profile/ProfileContainer";

import MainPage from "./Pages/Main/MainPage";
import {compose} from "redux";
import withRouter from "./HOC/withRouter";
import {connect} from "react-redux";
import Preloader from "./components/Comman/Preloader/Preloader";
import {initializeApp} from "./Redux/Reducer/app_Reducer";


const Feed = React.lazy(() => import("./Pages/Feed/Feed"));
const ExplorePageContainer = React.lazy(() => import("./Pages/Explore/ExplorePageContainer"));
const ContainerLoginPage = React.lazy(() => import("./Pages/Login/ContainerLoginPage"));
const MessagesPage = React.lazy(() => import("./Pages/Messages/MessagesPage"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (<>
                <Suspense fallback={<Preloader/>}>
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
                </Suspense>
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
