import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {PropsType} from "../../../App";

const MyPostsContainer = (props: PropsType) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store.getState().profilePage.newPostText));
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }

    return  (
        <MyPosts onPostChange={onPostChange}
                 posts={props.store.getState().profilePage.posts}
                 addPost={addPost}
                 newPostText={props.store.getState().profilePage.newPostText}

        />
    )
}

export default MyPostsContainer