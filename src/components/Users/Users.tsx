import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {toggleFollowingProgress, UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

let Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt={"avatar user"} src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           props.toggleFollowingProgress(true, u.id);
                            axios.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "8f0a712f-144a-4882-8429-3f5d82606576"
                                }
                            }).then(response => {
                                if(response.data.resultCode === 1){
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "8f0a712f-144a-4882-8429-3f5d82606576"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                        }}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                    {/*<span>*/}
                    {/*    <div>{u.location.country}</div>*/}
                    {/*    <div>{u.location.city}</div>*/}
                    {/*</span>*/}
            </span>
            </div>)}
    </div>
}

export default Users;