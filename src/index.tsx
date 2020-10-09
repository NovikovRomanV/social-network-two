import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type postType = {
    id: number
    message: string
    countLike: number
}

export type postsPropsType = {
    posts: Array<postType>
}

export type MessagePropsType = {
    message: string
}

export type DialogItemProps = {
    name: string
    id: number
}

export type dialogType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type dialogsPropsType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
}

export type indexType = {
    posts: Array<postType>
    dialogs: Array<dialogType>
    messages: Array<messageType>
}

let posts = [
    {id: 1, message: 'Hi, how are?', countLike: 15},
    {id: 1, message: "It's my first!", countLike: 10},
    {id: 1, message: "It's my two!", countLike: 7},
    {id: 1, message: "It's my three!", countLike: 5},
]

const dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
]

const messages = [
    {id: 1, message: "Hi!!!"},
    {id: 2, message: "Hello! How are you?"},
    {id: 3, message: "Things are good!"},
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
