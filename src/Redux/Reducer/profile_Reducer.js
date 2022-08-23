import post_1 from "../../assets/image/post1.jpg";
import post_2 from "../../assets/image/post2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";
import avatar_4 from "../../assets/image/avatar-4.jpg";
import img_1 from "../../assets/image/img1.jpg";
import img_8 from "../../assets/image/img8.jpg";
import img_4 from "../../assets/image/img4.jpg";


let initialState={
    explorerData: [
        {img: post_1, likeCounts: 30},
        {img: post_2, likeCounts: 30},
        {img: avatar_1, likeCounts: 30},
        {img: avatar_6, likeCounts: 30},
        {img: avatar_4, likeCounts: 30},
        {img: img_1, likeCounts: 30},
        {img: img_8, likeCounts: 30},
        {img: img_4, likeCounts: 30},
    ],
}

const profileReducer = (state =initialState,action) => {
    return state;
}
export default profileReducer