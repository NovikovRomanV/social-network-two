import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img alt='fon'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoI82dQ4RRe2jJboyhw2sLZofK-Kt8GhMQMg&usqp=CAU'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;