import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ChangeNewPostType, stateProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PropsType} from "../../App";



const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
               store={props.store}
            />
        </div>
    )
};

export default Profile;