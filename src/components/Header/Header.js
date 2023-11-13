import React from "react";
import { Link} from "react-router-dom";
import "./style.css";
import {LogoutOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {logOut} from "../../core/store/features/user/userSlice";
import Logo from "../ui/Logo";


function Header () {

    const dispatch = useDispatch()
    const logOutHandler = () => dispatch(logOut())
    return (
    <>
        <nav>
            <Logo/>
            <Link to={'/'}>Главная</Link>
            <Link to={'/courses'}>Курсы</Link>
            <Link to={'/users'}>Пользователи</Link>
            <Link to={'/news'}>Новости</Link>
            <Link to={'/materials'}>Материалы</Link>
            <Button onClick={logOutHandler} icon={<LogoutOutlined />}/>
        </nav>

    </>
    )
}

    

export default Header;