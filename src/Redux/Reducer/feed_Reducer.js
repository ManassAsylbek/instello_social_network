import avatar_2 from "../../assets/image/avatar-2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";


const ADD_COMMENT = 'ADD-COMMENT';


let initialState= {
    commentData: [
        {user: avatar_2, comment: "In ut odio libero vulputate"},
        {user: avatar_1, comment: "In ut odio dsfds sdfdsf"},
        {user: avatar_6, comment: "In ut sdfdsfd gfgf wetre"},
    ],


}

const feedReducer = (state=initialState,action) => { //используем в нвчале

    switch (action.type) {

        case ADD_COMMENT:
            return {
                ...state,
                newCommentText : "",
                commentData : [...state.commentData,{user: avatar_2, comment: action.newCommentBody}]
            }

        default:
            return state;
    }
}

export const addCommentActionCreator = (newCommentBody) => ({type: ADD_COMMENT,newCommentBody})


export default feedReducer