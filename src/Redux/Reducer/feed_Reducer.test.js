import React  from "react";
import feedReducer, {addCommentActionCreator, deleteCommentActionCreator} from "./feed_Reducer";
import avatar_2 from "../../assets/image/avatar-2.jpg";
import avatar_1 from "../../assets/image/avatar-1.jpg";
import avatar_6 from "../../assets/image/avatar-6.jpg";

let State= {
    commentData: [
        { id:1, user: avatar_2, comment: "In ut odio libero vulputate"},
        { id:2, user: avatar_1, comment: "In ut odio dsfds sdfdsf"},
        { id:3, user: avatar_6, comment: "In ut sdfdsfd gfgf wetre"}
    ],
}
test('length commentData should be incremented', () => {
    //1.test data
    let action=addCommentActionCreator("hello")


    //2.action
    let newState = feedReducer(State,action)


    //3.expection
    expect(newState.commentData.length).toBe(4)

});

test('comment of new comment should be correct ', () => {
    //1.test data
    let action=addCommentActionCreator("hello")


    //2.action
    let newState = feedReducer(State,action)


    //3.expection
    expect(newState.commentData[3].comment).toBe("hello")
});


test('after deleting length commentData should be decremented', () => {
    //1.test data
    let action=deleteCommentActionCreator(1)


    //2.action
    let newState = feedReducer(State,action)


    //3.expection
    expect(newState.commentData.length).toBe(2)

});
test('after deleting length commentData should not be decremented if id incorrect', () => {
    //1.test data
    let action=deleteCommentActionCreator(1000)


    //2.action
    let newState = feedReducer(State,action)


    //3.expection
    expect(newState.commentData.length).toBe(3)

});

