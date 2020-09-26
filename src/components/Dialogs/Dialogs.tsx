import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";

export type DialogItemProps = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!!!"/>
                <Message message="Hello! How are you?"/>
                <Message message="Things are good!"/>
            </div>
        </div>
    )
}

export default Dialogs;