import React from 'react';
import ContainerHeader from "../../components/Header/ContainerHeader";
import Navbar from "../../components/Navbar/Navbar";

import {Outlet} from "react-router";

const MainPage = () => {
    return (
        <div className="appWrapper">
            <ContainerHeader/>
            <Navbar/>
            <div className="appWrapperContent">
                <Outlet />
            </div>
        </div>
    );
};

export default MainPage;