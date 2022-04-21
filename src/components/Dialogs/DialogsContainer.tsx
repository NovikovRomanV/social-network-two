import React from "react";
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs, {StateType} from "./Dialogs";
import {PropsType} from "../../App";
import {connect} from "react-redux";
import store, {AppStateType} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
import {Dispatch} from "redux";


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().messagePage
//
//                 let onNewMessageChange = (body: string) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator(state.newMessageBody))
//                 }
//                 return <Dialogs
//                     updateNewMessageChange={onNewMessageChange}
//                     onSendMessageClick={onSendMessageClick}
//                     messagePage={state}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

type mapStateToPropsType = {
    messagePage: InitialStateType
    auth: {
        isAuth: boolean
    }

}

let mapStateToProps = (state: mapStateToPropsType) => {
    return{
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageChange: (body: string) => {dispatch(updateNewMessageBodyCreator(body))},
        onSendMessageClick: (newMessageBody: string) => {dispatch(sendMessageCreator(newMessageBody))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;