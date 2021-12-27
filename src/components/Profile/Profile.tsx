import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ChangeNewPostType, stateProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PropsType} from "../../App";
import {ProfileType} from "./ProfileContainer";

export type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;