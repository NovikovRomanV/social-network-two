
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

export type UserType = {
    id: number
    // avatar: string
    name: string
    status: string
    // location: { city: string, country: string }
    followed: boolean
    photos: {
        small: string
        large: string
    }
    uniqueUrlName: string
}

export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let usersState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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

export type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}

export type toggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type ActionType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType | toggleIsFetchingACType

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
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
        return state;
    }
}

export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId: userId} as const)
export const unfollowAC = (userId: number): UnfollowACType => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users: users} as const)
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingACType => ({type: TOGGLE_IS_FETCHING, isFetching } as const)