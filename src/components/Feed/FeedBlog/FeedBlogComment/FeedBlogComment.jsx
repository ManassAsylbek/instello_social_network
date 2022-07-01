import React from "react";
import s from './FeedBlogComment.module.css';
import picture from '../../../../assets/image/picture.png';
import camera from '../../../../assets/image/video-camera.png';
import Comment from "./Comment/Comment";


const FeedBlogComment = (props) => {

    let commentElements = props.feedPage.commentData.map(object => <Comment user={object.user}
                                                                            comment={object.comment}/>);
    let newCommentElement = React.createRef();//создаю ссылку

    let addCommentKey = (e) => {
        if (e.key === "Enter") {
            let text = newCommentElement.current.value;
            props.addComment(text)
        }
    }
    let addComment1 = (e) => {
        let text = newCommentElement.current.value;
        props.addComment(text);
    }

    return (
        <div className={s.feedBlogComment}>
            <div className={s.comment}>
                {commentElements}
            </div>
            <div className={s.getComment}><input type="text" onKeyDown={addCommentKey} ref={newCommentElement}
                                                 placeholder="Add you coment..."/>
                <div>
                    <p onClick={addComment1}>POST</p>
                    <img src={picture} alt=""/>
                    <img src={camera} alt=""/></div>
            </div>
        </div>
    )
}

export default FeedBlogComment;