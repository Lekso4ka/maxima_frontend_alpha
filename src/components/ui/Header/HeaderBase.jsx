import React from 'react';
import Logo from "../Logo";
import {Header} from "antd/es/layout/layout";
import MenuBase from "../MenuBase";
import {useDispatch} from "react-redux";
import {logOut} from "../../../core/store/features/user/userSlice";
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

const HeaderBase = () => {
    const dispatch = useDispatch()
    const logOutHandler = () => dispatch(logOut())

    return (
        <Header style={headerStyle}>
            <Logo/>
            
            <MenuBase/>
            <Button onClick={logOutHandler} icon={<LogoutOutlined />}/>
        </Header>
    );
};

export default HeaderBase;