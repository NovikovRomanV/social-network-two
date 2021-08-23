import {createStore, combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {storeType} from "./store";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer);



export default store