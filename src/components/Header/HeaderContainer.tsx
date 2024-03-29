import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUser, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


type HeaderContainerType = {
    // id: string,
    // email: string,
    login: string,
    isAuth: boolean
}

type mapDispatchToPropsType = {
    setAuthUserData: (id: string,
                      email: string,
                      login: string,
                      ) => void
}

class HeaderContainer extends React.Component<HeaderContainerType & mapDispatchToPropsType>
    {
    componentDidMount() {
        debugger
        // getAuthUser()
        authAPI.getAuth().then(response => {
debugger
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}
type MapStateToPropsType = {
    auth: {
        isAuth: boolean
        login: string
    }
}
const mapStateToProps = (state: MapStateToPropsType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData, getAuthUser})(HeaderContainer);