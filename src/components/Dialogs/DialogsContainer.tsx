import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {PropsType} from "../../App";

const DialogsContainer = (props: PropsType) => {
    let state = props.store.getState().messagePage

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    // let addMessageElement = React.createRef<HTMLTextAreaElement>();
    let onSendMessageClick = () => {
       // let text = addMessageElement.current?.value
       // if(text !== undefined){
       //    props.dispatch(sendMessageCreator(text))
       // }
        props.store.dispatch(sendMessageCreator(props.store.getState().messagePage.newMessageBody))

    }

    return (
        <Dialogs
            updateNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
            messagePage={state}
        />
    )
}

export default DialogsContainer;