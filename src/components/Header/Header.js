import React from "react";
import { Link} from "react-router-dom";
import "./style.css";
import Logo from '../ui/Logo/index';
import MenuBase from "../ui/MenuBase/index";
import {useDispatch} from "react-redux";
import {logOut} from "../../core/store/features/user/userSlice";
import {Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";

const headerStyle = {
    height: 64,
    paddingInline: 50,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const Header = () => {
    const dispatch = useDispatch()
    const logOutHandler = () => dispatch(logOut())
    return <>
        <header style={headerStyle}>
            <Logo/>
            <div><Link to={'/'}>Главная</Link></div>
            <div><Link to={'/courses'}>Курсы</Link></div>
            <div><Link to={'/users'}>Пользователи</Link></div>
            <div><Link to={'/news'}>Новости</Link></div>
            <div><Link to={'/materials'}>Материалы</Link></div>
            <Button onClick={logOutHandler} icon={<LogoutOutlined />}/>  
        </header>
        <MenuBase/>
        </> 
    
}

export default Header;