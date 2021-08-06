import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsPropsType} from "../../redux/store";

type OnNewMessageChangeType = {
    updateNewMessageChange: (body: string) => void
}
type OnSendMessageClickType = {
    onSendMessageClick: () => void
}
type StateType = {
    messagePage: dialogsPropsType
}

const Dialogs = (props: StateType & OnNewMessageChangeType & OnSendMessageClickType) => {

    let dialogsElement = props.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagePage.messages.map(m => <Message message={m.message}/>);
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
        props.onSendMessageClick()
    }

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