import avatar_2 from "../../assets/image/avatar-2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";


const ADD_COMMENT = 'ADD-COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';


let initialState = {
    commentData: [
        { id:1, user: avatar_2, comment: "In ut odio libero vulputate"},
        { id:2, user: avatar_1, comment: "In ut odio dsfds sdfdsf"},
        { id:3, user: avatar_6, comment: "In ut sdfdsfd gfgf wetre"}
    ]
}

const feedReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {

        case ADD_COMMENT:
            return {
                ...state,
                newCommentText: "",
                commentData: [...state.commentData,
                    {id:state.commentData.length+1,user: avatar_2, comment: action.newCommentBody}]
            }
        case DELETE_COMMENT:
            return {
                ...state, commentData: state.commentData.filter(el => el.id !== action.commentId)
            }

        default:
            return state;
    }
}

export const addCommentActionCreator = (newCommentBody) => ({type: ADD_COMMENT, newCommentBody})
export const deleteCommentActionCreator = (commentId) => ({type: DELETE_COMMENT, commentId})


export default feedReducer