import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ChangeNewPostType, stateProfileType} from "../../redux/state";



const Profile = (props: stateProfileType  & ChangeNewPostType & AddPostType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfilePage.posts}
                     // changeNewPostText={props.changeNewPostText}
                     dispatch={props.dispatch} newPostText={props.stateProfilePage.newPostText}/>
        </div>
    )
};

export default Profile;