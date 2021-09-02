import {ActionsTypes, AddPostActionType, postsPropsType, UpdateNewTextActionType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

type stateProfileReducerType = postsPropsType & AddPostActionType & UpdateNewTextActionType

export type InitialStateType = typeof initialState
export type postType = {
    id: number
    message: string
    countLike: number
}
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are?', countLike: 15},
        {id: 2, message: "It's my first!", countLike: 10},
        {id: 3, message: "It's my two!", countLike: 7},
        {id: 4, message: "It's my three!", countLike: 5},
    ] as Array<postType>,
    newPostText: "",
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST:
            const newPost: postType = {
                id: 1,
                message: action.newPostText,
                countLike: 0
            };
            stateCopy = {...state};
            if (stateCopy.newPostText) {
                stateCopy.posts = [...state.posts];
                stateCopy.posts.unshift(newPost);
            }
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            stateCopy = {...state};
            stateCopy.newPostText = action.newMessage;
            return stateCopy;

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