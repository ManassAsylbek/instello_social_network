import React from "react";
import {addCommentActionCreator} from "../../../../Redux/Reducer/feed_Reducer";
import FeedBlogComment from "./FeedBlogComment";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        commentData:state.feedPage.commentData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        addCommentActionCreator: (newCommentBody) =>{
            dispatch(addCommentActionCreator(newCommentBody));
        }
    }
}


const FeedBlogCommentContainer =connect(mapStateToProps,mapDispatchToProps)(FeedBlogComment)
export default FeedBlogCommentContainer;