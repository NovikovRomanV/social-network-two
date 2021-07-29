import React from "react";
import s from "./../Dialogs.module.css";
import {messagePropsType} from "../../../redux/store";

const Message = (props: messagePropsType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

export default Message;