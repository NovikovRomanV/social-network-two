import {createStore, combineReducers, applyMiddleware} from "redux";

import {storeType} from "./store";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer, applyMiddleware(thunk));



export default store