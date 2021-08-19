import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {PropsType} from "../../App";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messagePage

                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator(store.getState().messagePage.newMessageBody))

                }
                return <Dialogs
                    updateNewMessageChange={onNewMessageChange}
                    onSendMessageClick={onSendMessageClick}
                    messagePage={state}
                />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;