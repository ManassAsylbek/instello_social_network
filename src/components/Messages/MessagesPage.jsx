import React from "react";
import MessagesContainer from "./MessagesPage/MessagesContainer";




const MessagesPage = (props) => {

    return (<MessagesContainer store={props.store}/>)
}

export default MessagesPage;