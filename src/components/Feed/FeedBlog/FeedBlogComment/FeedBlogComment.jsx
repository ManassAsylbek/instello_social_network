import React from "react";
import s from './FeedBlogComment.module.css';
import picture from '../../../../assets/image/picture.png';
import camera from '../../../../assets/image/video-camera.png';
import Comment from "./Comment/Comment";

/*<input type="text" onChange="alert(this.value)">
    <input type="button" value="Button">*/


const FeedBlogComment = (props) => {

    let commentElements = props.feedPage.commentData.map(object => <Comment user={object.user} comment={object.comment}/>);
    let newCommentElement= React.createRef();//создаю ссылку

    let addComment=(e) => {
        if(e.key === "Enter"){
            let text=newCommentElement.current.value;
            alert(text)
        }
    }

    return (
        <div className={s.feedBlogComment}>
            <div className={s.comment}>
                {commentElements}
            </div>
            <div className={s.getComment}><input type="text" onKeyDown={addComment} ref={newCommentElement}

                                                 placeholder="Add you coment..."/>
                <div><img  src={picture} alt=""/>
                    <img src={camera} alt=""/></div>
            </div>
        </div>
    )
}

export default FeedBlogComment;