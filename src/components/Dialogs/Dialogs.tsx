import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsPropsType} from "../../redux/store";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {InitialStateAuthType} from "../../redux/auth-reducer";



type OnNewMessageChangeType = {
    updateNewMessageChange: (body: string) => void
}
type OnSendMessageClickType = {
    onSendMessageClick: (newMessageBody: string) => void
}
export type StateType = {
    messagePage: InitialStateType
}

type IsAuthType = {
    isAuth: boolean
}

const Dialogs = (props: StateType & OnNewMessageChangeType & OnSendMessageClickType & IsAuthType) => {

    let dialogsElement = props.messagePage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messagePage.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = props.messagePage.newMessageBody;

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageChange(body)
    }

    // let addMessageElement = React.createRef<HTMLTextAreaElement>();
    let onSendMessageClick = () => {
        // let text = addMessageElement.current?.value
        // if(text !== undefined){
        //    props.dispatch(sendMessageCreator(text))
        // }
        props.onSendMessageClick(newMessageBody)
    }
debugger
    if(!props.isAuth){return <Redirect to="/login" />}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    onChange={onNewMessageChange}
                    value={newMessageBody}
                    // ref={addMessageElement}
                    placeholder="Enter your message"/>
                <button className={s.addMessage} onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;