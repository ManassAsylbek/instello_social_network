import React from "react";
import s from './Messages.module.css';
import ChatsItem from "./ChatsItem/ChatsItem";
import avatar_1 from "../../assets/image/avatar-1.jpg"
import avatar_6 from "../../assets/image/avatar-6.jpg"
import avatar_4 from "../../assets/image/avatar-4.jpg"
import avatar_7 from "../../assets/image/avatar-7.jpg"
import avatar_2 from "../../assets/image/avatar-2.jpg"
import search from "../../assets/image/search.png"
import MessageItem from "./MessageItem/MessageItem";




const Messages = (props) => {

    let messageData =[
        {id: 1, name: "David Peterson", img: avatar_1 },
        {id: 2, name: "Sindy Forest", img: avatar_6 },
        {id: 3, name: "Zara Ali", img: avatar_4 },
        {id: 4, name: "John Snow", img: avatar_7 },
        {id: 5, name: "Angelina Jolie", img: avatar_2 }
    ]

    let messagesElements = messageData.map(m => <MessageItem name={m.name} id={m.id} src={m.img}/>);


    let chatData =[
        {id: 1, message:  "Hi!" },
        {id: 2, message:  "What's up!" },
        {id: 3, message:  "Yo!" },
        {id: 4, message:  "Yo!" }
    ]
    let chatElement = chatData.map(c => <ChatsItem message = {c.message}/>)
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