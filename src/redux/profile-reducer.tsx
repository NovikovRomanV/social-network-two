import {ActionsTypes, AddPostActionType, postsPropsType, postType, UpdateNewTextActionType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

type stateProfileReducerType = postsPropsType & AddPostActionType & UpdateNewTextActionType

let initialState: postsPropsType = {
    posts: [
        {id: 1, message: 'Hi, how are?', countLike: 15},
        {id: 2, message: "It's my first!", countLike: 10},
        {id: 3, message: "It's my two!", countLike: 7},
        {id: 4, message: "It's my three!", countLike: 5},
    ],
    newPostText: "",
}

export const profileReducer = (state: postsPropsType = initialState, action: ActionsTypes): postsPropsType => {
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
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text
    } as const
}