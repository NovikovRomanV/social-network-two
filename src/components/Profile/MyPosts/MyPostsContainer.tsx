import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {PropsType} from "../../../App";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator(store.getState().profilePage.newPostText));
                }
                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }
                return <MyPosts onPostChange={onPostChange}
                                posts={store.getState().profilePage.posts}
                                addPost={addPost}
                                newPostText={store.getState().profilePage.newPostText}
                />
            }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer