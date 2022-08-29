import React from "react";
import s from './Messages.module.css';
import ChatsItem from "./ChatsItem/ChatsItem";
import search from "../../../assets/image/search.png"
import MessageItem from "./MessageItem/MessageItem";
import ChatAvatar from "./ChatAvatar/ChatAvatar";
import {Field, reduxForm} from "redux-form";





const Messages = (props) => {


    let messagesElements = props.messageData.map(obj => <MessageItem name={obj.name}
                                                                     key={obj.id}
                                                                     src={obj.img}/>);

    let chatElement = props.chatData.map(obj => <ChatsItem message={obj.message} img={obj.img}
                                                           key={obj.id}/>)
/*


    let onSendMessageKey = (e) => {
        if (e.key === "Enter") {
            let text =
                props.sendMessageCreator();
        }
    }

    let onSendMessage = (e) => {
        props.sendMessageCreator();
    }


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body)
    }*/

    const addNewMessage =(values)=>{

        props.sendMessageCreator(values.newMessageBody);
    }

    return (
        <div><p className={s.titleName}>Messages</p>
            <div className={s.messages}>
                <div className={s.messageHeader}>
                    <input type="text" placeholder="Search"/>
                    <img src={search} alt=""/>
                </div>
                <div className={s.messagesItem}>
                    {messagesElements}

                </div>

                <div className={s.chatName}>
                    <ChatAvatar/>
                </div>

                <div className={s.chats}>
                    {chatElement}
                </div>

                <MessageReduxForm onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}



const MessageForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit} className={s.getMessage}>
            <Field
                   component={"input"}
                   placeholder="Your Message.."
                   name={"newMessageBody"}
            />
            <div >
                <button className={s.btn}>Send</button>
            </div>
        </form>
    )
}

const  MessageReduxForm = reduxForm({
    form:"AddMessageForm"
})(MessageForm)



export default Messages;