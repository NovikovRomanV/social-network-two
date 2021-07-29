import {ActionsTypes, dialogsPropsType, SendMessageType, UpdateNewMessageBodyType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

type stateDialogsReducerType = dialogsPropsType & SendMessageType & UpdateNewMessageBodyType

let initialState: dialogsPropsType = {
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
}

export const dialogsReducer = (state: dialogsPropsType = initialState, action: ActionsTypes): dialogsPropsType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = (text: string): SendMessageType => ({type: SEND_MESSAGE, text: text}) as const;
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    } as const
}