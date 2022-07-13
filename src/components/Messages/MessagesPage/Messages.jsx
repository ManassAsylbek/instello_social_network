import React from "react";
import s from './Messages.module.css';
import ChatsItem from "./ChatsItem/ChatsItem";
import search from "../../../assets/image/search.png"
import MessageItem from "./MessageItem/MessageItem";
import ChatAvatar from "./ChatAvatar/ChatAvatar";



const Messages = (props) => {


    let messagesElements = props.messageData.map(obj => <MessageItem name={obj.name} id={obj.id}
                                                                                  src={obj.img}/>);

    let chatElement = props.chatData.map(obj => <ChatsItem message={obj.message} img={obj.img}/>)


    let newMessageBody = props.updateNewMessageBody;


    let newMessageElement = React.createRef();//создаю ссылку


    let onSendMessageKey = (e) => {
        if (e.key === "Enter") {
            props.sendMessageCreator();
        }
    }

    let onSendMessage = (e) => {
        props.sendMessageCreator();
    }


    let onNewMessageChange = (e) => {
        let body =e.target.value;
        props.updateNewMessageBodyCreator(body)
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
                <div className={s.getMessage}>
                    <input type="text" onChange={onNewMessageChange} onKeyDown={onSendMessageKey}
                           ref={newMessageElement}
                           placeholder="Your Message.." value={newMessageBody}/>
                    <div className={s.btn}>
                        <span onClick={onSendMessage}>Send</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;