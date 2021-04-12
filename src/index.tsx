import './index.css';
import * as serviceWorker from './serviceWorker';
import {addPost, changeNewPostText, state, stateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
