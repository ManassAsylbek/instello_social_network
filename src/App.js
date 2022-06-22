import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Header from "./components/Header";
import NavbarHeader from "./components/NavbarHeader";



const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <div className='navbar-wrapper'>
                <NavbarHeader/>
                <Navbar />
            </div>
            <Profile />
        </div>
    );
}




export default App;
