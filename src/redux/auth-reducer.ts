import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET-USER-DATA";

export type InitialStateAuthType = {
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

const authReducer = (state: InitialStateAuthType = initialState, action: ActionType) => {
   debugger
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

export const getAuthUser = () => (dispatch: Dispatch) => {
    debugger
    authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            debugger
            let {id, email, login} = response.data.data
            dispatch (setAuthUserData(id, email, login));
        }
    })

}

export default authReducer;