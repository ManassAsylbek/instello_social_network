import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/Reducer/messages_Reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


/*
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
*/


let mapStateToProps = (state) => {
    return {
        chatData: state.messagesPage.chatData,
        messageData: state.messagesPage.messageData,
        updateNewMessageBody: state.messagesPage.updateNewMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator: (body) => {
            /*let action = updateNewMessageBodyCreator(body)*///это функция реагирует на изминение при вводе
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator());
        }

    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;