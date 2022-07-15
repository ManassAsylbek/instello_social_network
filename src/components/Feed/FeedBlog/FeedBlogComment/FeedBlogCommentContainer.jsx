import React from "react";
import {addCommentActionCreator, updateNewCommentTextActionCreator} from "../../../../Redax/Reducer/feed_Reducer";
import FeedBlogComment from "./FeedBlogComment";
import {connect} from "react-redux";


/*const FeedBlogCommentContainer = (props) => {

    return (<StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                let onAddComment = (e) => {
                   store.dispatch(addCommentActionCreator());

                }

                let onAddCommentChange = (text) => {
                    let action = updateNewCommentTextActionCreator(text)
                    store.dispatch(action);
                }
                return <FeedBlogComment addCommentActionCreator={onAddComment}
                                        updateNewCommentTextActionCreator={onAddCommentChange}
                                        commentData={state.feedPage.commentData}
                                        newCommentText={state.feedPage.newCommentText}/>
            }}
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps = (state) => {
    return {
        commentData:state.feedPage.commentData,
        newCommentText:state.feedPage.newCommentText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewCommentTextActionCreator: (text) => {
            let action = updateNewCommentTextActionCreator(text)
            dispatch(action);
        },
        addCommentActionCreator: () =>{
            dispatch(addCommentActionCreator());
        }
    }
}


const FeedBlogCommentContainer =connect(mapStateToProps,mapDispatchToProps)(FeedBlogComment)
export default FeedBlogCommentContainer;