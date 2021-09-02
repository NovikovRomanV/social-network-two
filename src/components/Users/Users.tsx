import React from "react";
import styles from "./Users.module.css"

import {UsersStateType} from "../../redux/users-reducer";
import {mapDispatchToPropsType} from "./UsersContainer";


const Users = (props: UsersStateType & mapDispatchToPropsType) => {

    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
                fullName: "Dimuch",
                status: "Hi, good!!!",
                location: {city: "Minsk", country: "Belarus"},
                followed: true
            },
            {
                id: 2,
                avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
                fullName: "Sveta",
                status: "Hi, good!!!",
                location: {city: "Minsk", country: "Belarus"},
                followed: false
            },
            {
                id: 3,
                avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
                fullName: "Pasha",
                status: "Hi, good!!!",
                location: {city: "Moscow", country: "Russian"},
                followed: true
            },
            {
                id: 4,
                avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
                fullName: "Bob",
                status: "Hi, good!!!",
                location: {city: "New York", country: "USA"},
                followed: false
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.avatar} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users