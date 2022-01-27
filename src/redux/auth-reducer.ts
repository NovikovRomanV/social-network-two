const SET_USER_DATA = "SET-USER-DATA";

type InitialStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}


type ActionType = {
    type: typeof SET_USER_DATA
    data: {
        userId: string | null
        email: string | null
        login: string | null
    }
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
});

export default authReducer;