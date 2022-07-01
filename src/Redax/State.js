import avatar_1 from "../assets/image/avatar-1.jpg";
import avatar_6 from "../assets/image/avatar-6.jpg";
import avatar_4 from "../assets/image/avatar-4.jpg";
import avatar_7 from "../assets/image/avatar-7.jpg";
import avatar_2 from "../assets/image/avatar-2.jpg";
import post_1 from "../assets/image/post1.jpg";
import post_2 from "../assets/image/post2.jpg";
import img_1 from "../assets/image/img1.jpg";
import img_8 from "../assets/image/img8.jpg";
import img_4 from "../assets/image/img4.jpg";




let state ={
    profilePage : {
        explorerData:  [
            {img:post_1, likeCounts: 30 },
            {img:post_2, likeCounts: 30 },
            {img:avatar_1, likeCounts: 30 },
            {img:avatar_6, likeCounts: 30 },
            {img:avatar_4, likeCounts: 30 },
            {img:img_1, likeCounts: 30 },
            {img:img_8, likeCounts: 30 },
            {img:img_4, likeCounts: 30 },
        ],
    },
    messagesPage:{
        chatData : [
            {id: 1, message:  "Hi!" },
            {id: 2, message:  "What's up!" },
            {id: 3, message:  "Yo!" },
            {id: 4, message:  "Yo!" }
        ],
        messageData: [
            {id: 1, name: "David Peterson", img: avatar_1 },
            {id: 2, name: "Sindy Forest", img: avatar_6 },
            {id: 3, name: "Zara Ali", img: avatar_4 },
            {id: 4, name: "John Snow", img: avatar_7 },
            {id: 5, name: "Angelina Jolie", img: avatar_2 }
        ],
    },
    feedPage:{
        commentData: [
            {user:avatar_2 ,comment:"In ut odio libero vulputate"},
            {user: avatar_1  ,comment:"In ut odio dsfds sdfdsf"},
            {user:avatar_6 ,comment:"In ut sdfdsfd gfgf wetre"},
        ],
    }

}


export default state