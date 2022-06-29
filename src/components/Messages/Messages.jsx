import React from "react";
import s from './Messages.module.css';
import ChatsItem from "./ChatsItem/ChatsItem";
import search from "../../assets/image/search.png"
import MessageItem from "./MessageItem/MessageItem";




const Messages = (props) => {

    let messagesElements = props.messageData.map(m => <MessageItem name={m.name} id={m.id} src={m.img}/>);

    let chatElement = props.chatData.map(c => <ChatsItem message = {c.message}/>)

    return (
        <div><p className={s.mess}>Messages</p>
            <div className={s.messages}>
                <div className={s.messageHeader}>
                    <input type="text" placeholder="Search"/>
                    <img src={search} alt=""/>
                </div>
                <div className={s.messagesItem}>
                    {messagesElements}

                </div>
                <div className={s.chatName}>an</div>
                <div className={s.chats}>
                    {chatElement}
                </div>
            </div>
        </div>
    )
}

export default Messages;