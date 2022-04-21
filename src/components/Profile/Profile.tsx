import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ChangeNewPostType, stateProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PropsType} from "../../App";
import {ProfileType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";

export type ProfilePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}


const Profile = (props: ProfilePropsType ) => {
    if(!props.isAuth){return <Redirect to="/login" />}
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;