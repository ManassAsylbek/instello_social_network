import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redax/Reducer/messages_Reducer";
import Messages from "./Messages";


const MessagesCantainer = (props) => {

    let state = props.store.getState()

    let onSendMessage = (e) => {
        props.store.dispatch(sendMessageCreator());
    }


    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body)//это функция реагирует на изминение при вводе
        props.store.dispatch(action);
    }

    return (
        <Messages sendMessageCreator={onSendMessage}
                      updateNewMessageBodyCreator={onNewMessageChange}
                      messageData={state.messagesPage.messageData}
                      chatData={state.messagesPage.chatData}
                      updateNewMessageBody={state.messagesPage.messagesPage} />


    )
}

export default MessagesCantainer;