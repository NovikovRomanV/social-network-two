import {createStore, combineReducers} from "redux";

import {storeType} from "./store";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer);



export default store