import React from "react";
import {addCommentActionCreator, updateNewCommentTextActionCreator} from "../../../../Redax/Reducer/feed_Reducer";
import FeedBlogComment from "./FeedBlogComment";
import StoreContext from "../../../../StoreContext";


const FeedBlogCommentContainer = (props) => {

    let state = props.store.getState()

    let onAddComment = (e) => {
        store.dispatch(addCommentActionCreator());

    }

    let onAddCommentChange = (text) => {
        let action = updateNewCommentTextActionCreator(text)
        store.dispatch(action);
    }
    return (
            <FeedBlogComment addCommentActionCreator={onAddComment}
                                        updateNewCommentTextActionCreator={onAddCommentChange}
                                        commentData={state.feedPage.commentData}
                                        newCommentText={state.feedPage.newCommentText}/>
    )
}

export default FeedBlogCommentContainer;