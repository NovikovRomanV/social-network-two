import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {stateDialogsType} from "../../redux/state";

const Dialogs = (props: stateDialogsType) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let addMessageElement = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        let text = addMessageElement.current?.value
        alert(text)
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
                <textarea ref={addMessageElement}/>
                <button className={s.addMessage} onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;