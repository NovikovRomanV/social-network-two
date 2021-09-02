

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type UserType = {
    id: number
    avatar: string
    fullName: string
    status: string
    location: { city: string, country: string }
    followed: boolean
}

export type UsersStateType = {
    users: Array<UserType>
}

let usersState: UsersStateType = {
    users: []
}

export type FollowACType = {
    type: typeof FOLLOW
    userId: number
}

export type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}

export type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export type ActionType = FollowACType | UnfollowACType | SetUsersACType

export const usersReducer = (state: UsersStateType = usersState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
           return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            };

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        default:
        return state;
    }
}

export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId: userId} as const)
export const unfollowAC = (userId: number): UnfollowACType => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users: users} as const)