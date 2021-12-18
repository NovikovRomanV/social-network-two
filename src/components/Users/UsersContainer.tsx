import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UsersStateType,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";
import preloader from "./../../assets/images/Rocket.gif"
import Preloader from "../Preloader/Preloader";

export type mapStateToPropsType = {
    usersPage: UsersStateType
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersStateType & mapDispatchToPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
            // props.setUsers([
            //     {
            //         id: 1,
            //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
            //         fullName: "Dimuch",
            //         status: "Hi, good!!!",
            //         location: {city: "Minsk", country: "Belarus"},
            //         followed: true
            //     },
            //     {
            //         id: 2,
            //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
            //         fullName: "Sveta",
            //         status: "Hi, good!!!",
            //         location: {city: "Minsk", country: "Belarus"},
            //         followed: false
            //     },
            //     {
            //         id: 3,
            //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
            //         fullName: "Pasha",
            //         status: "Hi, good!!!",
            //         location: {city: "Moscow", country: "Russian"},
            //         followed: true
            //     },
            //     {
            //         id: 4,
            //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
            //         fullName: "Bob",
            //         status: "Hi, good!!!",
            //         location: {city: "New York", country: "USA"},
            //         followed: false
            //     },
            // ])
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}

        />
        </>
    }
}


// const Users = (props: UsersStateType & mapDispatchToPropsType) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get<any>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items);
//             });
//             // props.setUsers([
//             //     {
//             //         id: 1,
//             //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
//             //         fullName: "Dimuch",
//             //         status: "Hi, good!!!",
//             //         location: {city: "Minsk", country: "Belarus"},
//             //         followed: true
//             //     },
//             //     {
//             //         id: 2,
//             //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
//             //         fullName: "Sveta",
//             //         status: "Hi, good!!!",
//             //         location: {city: "Minsk", country: "Belarus"},
//             //         followed: false
//             //     },
//             //     {
//             //         id: 3,
//             //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
//             //         fullName: "Pasha",
//             //         status: "Hi, good!!!",
//             //         location: {city: "Moscow", country: "Russian"},
//             //         followed: true
//             //     },
//             //     {
//             //         id: 4,
//             //         avatar: "https://avatarko.ru/img/avatar/12/zhivotnye_ptica_sova_11535.jpg",
//             //         fullName: "Bob",
//             //         status: "Hi, good!!!",
//             //         location: {city: "New York", country: "USA"},
//             //         followed: false
//             //     },
//             // ])
//         }
//     }
//     return <div>
//         <button onClick={getUsers}>Get users</button>
//         {
//             props.users.map(u => <div key={u.id}>
//             <span>
//                 <div>
//                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
//                 </div>
//                 <div>
//                     {u.followed
//                         ? <button onClick={() => {
//                             props.unfollow(u.id)
//                         }}>Unfollow</button>
//                         : <button onClick={() => {
//                             props.follow(u.id)
//                         }}>Follow</button>
//                     }
//
//                 </div>
//             </span>
//                 <span>
//                 <span>
//                     <div>{u.name}</div>
//                     <div>{u.status}</div>
//                 </span>
//                     {/*<span>*/}
//                     {/*    <div>{u.location.country}</div>*/}
//                     {/*    <div>{u.location.city}</div>*/}
//                     {/*</span>*/}
//             </span>
//             </div>)}
//     </div>
// }

let mapStateToProps = (state: mapStateToPropsType): UsersStateType => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return{
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
          dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);