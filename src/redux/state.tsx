import React from "react";

export type postType = {
    id: number
    message: string
    countLike: number
}

export type postsPropsType = {
    posts: Array<postType>
}

export type messagePropsType = {
    message: string
}

export type dialogItemType = {
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

export type stateType = {
    profilePage: postsPropsType
    messagePage: dialogsPropsType
}

export type statePropsType = {
    state: stateType
}

export type stateProfileType = {
    state: postsPropsType
}

export type stateDialogsType = {
    state: dialogsPropsType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are?', countLike: 15},
            {id: 1, message: "It's my first!", countLike: 10},
            {id: 1, message: "It's my two!", countLike: 7},
            {id: 1, message: "It's my three!", countLike: 5},
        ],
    },
    messagePage: {
        messages: [
            {id: 1, message: "Hi!!!"},
            {id: 2, message: "Hello! How are you?"},
            {id: 3, message: "Things are good!"},
        ],
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
        ],
    }
}