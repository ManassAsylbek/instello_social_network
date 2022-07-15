import avatar_2 from "../../assets/image/avatar-2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";
import avatar_4 from "../../assets/image/avatar-4.jpg";
import avatar_7 from "../../assets/image/avatar-7.jpg";


const sendMessage = 'SEND-MESSAGE';
const updateNewMessageBody = 'UPDATE-NEW-CHAT-BODY';

let initialState={
    chatData: [
        {id: 1, img: avatar_1, message: "Hi!"},
        {id: 2, img: avatar_1, message: "What's up!"},
        {id: 3, img: avatar_1, message: "Yo!"},
        {id: 4, img: avatar_1, message: "Yo!"}
    ],
    messageData: [
        {id: 1, name: "David Peterson", img: avatar_1},
        {id: 2, name: "Sindy Forest", img: avatar_6},
        {id: 3, name: "Zara Ali", img: avatar_4},
        {id: 4, name: "John Snow", img: avatar_7},
        {id: 5, name: "Angelina Jolie", img: avatar_2}
    ],
    updateNewMessageBody:""


}

const messagesReducer = (state = initialState,action) => {

switch (action.type) {

    case updateNewMessageBody:
        return {
            ...state,
            updateNewMessageBody: action.body
        }
       /* stateCopy.updateNewMessageBody = action.body;*/

    case sendMessage:
        let body=state.updateNewMessageBody
        return  {
            ...state,
            updateNewMessageBody : "",
            chatData : [...state.chatData,{id: 6, img: avatar_2, message:body}]
        }
    default:
        return state;
    }

}

export const sendMessageCreator = () => ({type: sendMessage})

export const updateNewMessageBodyCreator = (body) =>
    ({type: updateNewMessageBody, body: body})

export default messagesReducer