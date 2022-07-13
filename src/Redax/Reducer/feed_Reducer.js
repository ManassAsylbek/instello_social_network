import avatar_2 from "../../assets/image/avatar-2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";


const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';

let initialState= {
    commentData: [
        {user: avatar_2, comment: "In ut odio libero vulputate"},
        {user: avatar_1, comment: "In ut odio dsfds sdfdsf"},
        {user: avatar_6, comment: "In ut sdfdsfd gfgf wetre"},
    ],
    newCommentText:"cool! "

}

const feedReducer = (state=initialState,action) => { //используем в нвчале

    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                user: avatar_2,
                comment: state.newCommentText
            };
            state.commentData.push(newComment);
            state.newCommentText = "";
            return state

        case UPDATE_NEW_COMMENT_TEXT:
            state.newCommentText = action.newText;
            return state
        default:
            return state;
    }
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT})

export const updateNewCommentTextActionCreator = (text) =>
    ({type: UPDATE_NEW_COMMENT_TEXT, newText: text})

export default feedReducer