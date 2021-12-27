import React from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {StateType} from "./MyPosts/MyPostsContainer";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = "2"
        }
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
            this.props.setUsersProfile(response.data);
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);