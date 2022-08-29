import React from "react";
import s from './FeedBlogComment.module.css';
import picture from '../../../../assets/image/picture.png';
import camera from '../../../../assets/image/video-camera.png';
import Comment from "./Comment/Comment";
import {Field, reduxForm} from "redux-form";
import {required,maxLengthCreator} from "./../../../../utilits/validators";
import FormsInput from "../../../../components/Comman/formsControl/FormsControl";


const FeedBlogComment = (props) => {

    let commentElements = props.commentData.map(object => <Comment user={object.user} key={object.id}
                                                                            comment={object.comment}/>);

    const addNewComment =(values)=>{

        props.addCommentActionCreator(values.newCommentBody);
    }

    return (
        <div className={s.feedBlogComment}>
            <div className={s.comment}>
                {commentElements}
            </div>
            <NewCommentReduxForm onSubmit={addNewComment}/>
        </div>
    )
}

const maxLength50 =maxLengthCreator(50)

const NewCommentForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit} className={s.getComment}>
            <Field
                component={FormsInput}
                placeholder="Add you coment..."
                name={"newCommentBody"}
                validate={[required,maxLength50]}
            />
            <div>
                <button>POST</button>
                <img src={picture} alt=""/>
                <img src={camera} alt=""/>
            </div>
        </form>
    )
}

const  NewCommentReduxForm = reduxForm({
    form:"AddNewCommentForm"
})(NewCommentForm)




export default FeedBlogComment;