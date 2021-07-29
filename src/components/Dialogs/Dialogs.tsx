import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    AddPostType, ChangeNewPostType,
    stateDialogsType,
} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props: stateDialogsType & AddPostType & ChangeNewPostType) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageBody;

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    // let addMessageElement = React.createRef<HTMLTextAreaElement>();
    let onSendMessageClick = () => {
       // let text = addMessageElement.current?.value
       // if(text !== undefined){
       //    props.dispatch(sendMessageCreator(text))
       // }
        props.dispatch(sendMessageCreator(props.state.newMessageBody))

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