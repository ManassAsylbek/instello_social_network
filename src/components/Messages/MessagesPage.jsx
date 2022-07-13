import React from "react";
import MessagesCantainer from "./MessagesPage/MessagesContainer";



const MessagesPage = (props) => {

    return (<MessagesCantainer store={props.store}/>)
}

export default MessagesPage;