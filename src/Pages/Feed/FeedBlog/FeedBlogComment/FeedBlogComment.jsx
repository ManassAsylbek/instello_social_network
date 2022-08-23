import React from "react";
import s from './FeedBlogComment.module.css';
import picture from '../../../../assets/image/picture.png';
import camera from '../../../../assets/image/video-camera.png';
import Comment from "./Comment/Comment";


const FeedBlogComment = (props) => {

    let commentElements = props.commentData.map(object => <Comment user={object.user} key={object.id}
                                                                            comment={object.comment}/>);
    let newCommentElement = React.createRef();//создаю ссылку
    let newCommentText = props.newCommentText

    let onAddCommentKey = (e) => {
        if (e.key === "Enter") {
            let text = newCommentElement.current.value;
            props.addCommentActionCreator(text)
        }
    }
    let onAddComment = (e) => {
        let text = newCommentElement.current.value;
        props.addCommentActionCreator(text);
    }

    let onAddCommentChange = (e) => {
        let text =e.target.value;
        props.updateNewCommentTextActionCreator(text)
    }
    return (
        <div className={s.feedBlogComment}>
            <div className={s.comment}>
                {commentElements}
            </div>
            <div className={s.getComment}>
                <input type="text"
                                                 onChange={onAddCommentChange}
                                                 onKeyDown={onAddCommentKey}
                                                 ref={newCommentElement}
                                                 placeholder="Add you coment..."
                                                 value={newCommentText}/>
                <div>
                    <p onClick={onAddComment}>POST</p>
                    <img src={picture} alt=""/>
                    <img src={camera} alt=""/></div>
            </div>
        </div>
    )
}

export default FeedBlogComment;