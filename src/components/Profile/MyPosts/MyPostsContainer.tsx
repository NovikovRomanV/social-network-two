import React from "react";
import {addPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {PropsType} from "../../../App";

import {Dispatch} from "redux";
import store from "../../../redux/redux-store";
import {connect} from "react-redux";
import {postsPropsType} from "../../../redux/store";

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator(store.getState().profilePage.newPostText));
//                 }
//                 let onPostChange = (text: string) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action)
//                 }
//                 return <MyPosts onPostChange={onPostChange}
//                                 posts={store.getState().profilePage.posts}
//                                 addPost={addPost}
//                                 newPostText={store.getState().profilePage.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

export type StateType = {
    profilePage: InitialStateType
}

let mapStateToProps = (state: StateType) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onPostChange: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer