import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img alt='Logo' src='https://api.freelogodesign.org/assets/thumb/logo/332556_400.png'/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login :
                        <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;