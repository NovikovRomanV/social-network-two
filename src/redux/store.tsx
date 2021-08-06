import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {Dispatch} from "react";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export type postType = {
    id: number
    message: string
    countLike: number
}

export type postsPropsType = {
    posts: Array<postType>
    newPostText: string
}

export type messagePropsType = {
    message: string
}

export type dialogItemType = {
    name: string
    id: number
}

export type dialogType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type dialogsPropsType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
    newMessageBody: string
}

export type stateType = {
    profilePage: postsPropsType
    messagePage: dialogsPropsType
    // profileReducer: (profilePage: postsPropsType, action: ActionsTypes) => postsPropsType
    // dialogsReducer: (messagePage: dialogsPropsType, action: ActionsTypes) => dialogsPropsType
}

export type statePropsType = {
    _state: stateType
}

export type stateProfileType = {
    stateProfilePage: postsPropsType
}

export type stateDialogsType = {
    state: dialogsPropsType
}

export type storeType = {
    _state: stateType,
    getState: () => stateType,
    rerenderEntireTree: () => void,
    // addPost: () => void,
    // changeNewPostText: (newMessage: string) => void,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionsTypes)=>void

}

export type AddPostActionType = {
    type: typeof  ADD_POST,
    newPostText: string
}

export type UpdateNewTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newMessage: string
}



export type SendMessageType = {
    type: typeof SEND_MESSAGE,
    text: string
}
export type UpdateNewMessageBodyType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    body: string
}

export type AddPostType = {
    dispatch: (action: ActionsTypes)=>void
}
export type ChangeNewPostType = {
    // changeNewPostText: (newMessage: string) => void
    // dispatch: (action: ActionsTypes)=>void
}


export type ActionsTypes = AddPostActionType
     | UpdateNewTextActionType
     | UpdateNewMessageBodyType
     | SendMessageType;

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are?', countLike: 15},
                {id: 2, message: "It's my first!", countLike: 10},
                {id: 3, message: "It's my two!", countLike: 7},
                {id: 4, message: "It's my three!", countLike: 5},
            ],
            newPostText: "",
        },
        messagePage: {
            messages: [
                {id: 1, message: "Hi!!!"},
                {id: 2, message: "Hello! How are you?"},
                {id: 3, message: "Things are good!"},
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
            ],
            newMessageBody: '',
        },

    },
    getState(){
        return this._state
    },
    rerenderEntireTree() {
        console.log("State changed");
    },
    // addPost() {
    //     const newPost: postType = {
    //         id: 1,
    //         message: this._state.profilePage.newPostText,
    //         countLike: 0
    //     };
    //     if (this._state.profilePage.newPostText) {
    //         this._state.profilePage.posts.unshift(newPost)
    //     };
    //     this._state.profilePage.newPostText = '';
    //     this.rerenderEntireTree();
    // },
    // changeNewPostText(newMessage: string) {
    //     this._state.profilePage.newPostText = newMessage;
    //     this.rerenderEntireTree();
    // },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this.rerenderEntireTree();
        // if(action.type === ADD_POST){
        //     const newPost: postType = {
        //         id: 1,
        //         message: action.newPostText,
        //         countLike: 0
        //     };
        //     if (this._state.profilePage.newPostText) {
        //         this._state.profilePage.posts.unshift(newPost)
        //     }
        //     this._state.profilePage.newPostText = '';
        //     this.rerenderEntireTree();
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newMessage;
        //     this.rerenderEntireTree();
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        //     this._state.messagePage.newMessageBody = action.body;
        //     this.rerenderEntireTree();
        // } else if (action.type === SEND_MESSAGE){
        //     let body = this._state.messagePage.newMessageBody;
        //     this._state.messagePage.newMessageBody = "";
        //     this._state.messagePage.messages.push({id: 6, message: body});
        //     this.rerenderEntireTree();
        // }
    }
}

export default store;
