import {createStore, combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {storeType} from "./store";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
})

let store: storeType = createStore(reducers);

export default store