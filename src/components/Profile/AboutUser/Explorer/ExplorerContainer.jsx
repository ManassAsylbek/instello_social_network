import React from "react";
import {connect} from "react-redux";
import Explorer from "./Explorer";

/*const ExplorerContainer = (props) => {

    let explorerElement=props.explorerData.map(exp =><ExplorerImage img={exp.img}/> )

    return (

        <div className={s.explorer}>
            <p  className={s.text}>Explorer</p>
            {explorerElement}
        </div>
    )
}*/

let mapStateToProps = (state) => {
    return {
        explorerData:state.profilePage.explorerData,
    }
}

const ExplorerContainer = connect(mapStateToProps)(Explorer)
export default ExplorerContainer;