import {ActionsTypes, AddPostActionType, postsPropsType, postType, UpdateNewTextActionType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

type stateProfileReducerType = postsPropsType & AddPostActionType & UpdateNewTextActionType

export const profileReducer = (state: stateProfileReducerType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postType = {
                id: 1,
                message: action.newPostText,
                countLike: 0
            };
            if (state.newPostText) {
                state.posts.unshift(newPost)
            }
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newMessage;
            return state;
        default:
            return state;
    }
    return state
}