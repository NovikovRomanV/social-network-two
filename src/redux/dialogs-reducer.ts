import {ActionsTypes, dialogsPropsType, SendMessageType, UpdateNewMessageBodyType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"


export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


export type InitialStateType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string

}

// export type InitialStateType = typeof initialState

let initialState = {
    messages: [
        {id: 1, message: "Hi!!!"},
        {id: 2, message: "Hello! How are you?"},
        {id: 3, message: "Things are good!"},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
    ] as Array<DialogType>,
    newMessageBody: '',
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}],
            };
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