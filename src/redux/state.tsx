const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
}

export type stateType = {
    profilePage: postsPropsType
    messagePage: dialogsPropsType
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

type AddPostActionType = {
    type: "ADD-POST",
    newPostText: string
}

type UpdateNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newMessage: string
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}

export const updateNewPostTextActionCreator = (text: string): UpdateNewTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text
    }
}

export type ActionsTypes = AddPostActionType | UpdateNewTextActionType;

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
        }
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
        if(action.type === "ADD-POST"){
            const newPost: postType = {
                id: 1,
                message: action.newPostText,
                countLike: 0
            };
            if (this._state.profilePage.newPostText) {
                this._state.profilePage.posts.unshift(newPost)
            }
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newMessage;
            this.rerenderEntireTree();
        }
    }
}

export type AddPostType = {
    dispatch: (action: ActionsTypes)=>void
}

export type ChangeNewPostType = {
    // changeNewPostText: (newMessage: string) => void
    dispatch: (action: ActionsTypes)=>void
}



export default store;
