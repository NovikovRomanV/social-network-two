import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {dialogItemType} from "../../../redux/store";

const DialogItem = (props: dialogItemType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;