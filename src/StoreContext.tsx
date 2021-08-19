import React from "react";
import store from "./redux/redux-store";
import {PropsType} from "./App";

const StoreContext = React.createContext(store)

export const Provider = (props: PropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext