import React, {useState} from 'react';
import {Menu} from "antd";
import {profileConfig} from "../../../routes/profileConfig";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const MenuBase = () => {
    const [current, setCurrent] = useState(window.location.pathname);
    const navigate = useNavigate()
    const role = useSelector(state => state.user.role)
    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key)
    };

    return (
        <Menu
            mode="horizontal"
            style={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                borderBottom: 'none'
            }}
            onClick={onClick}
            selectedKeys={[current]}
            items={profileConfig[role].menu.filter(r => r.isMenuItem).map(r => ({
                label: r.name,
                key: r.path
            }))}
        />
    );
};

export default MenuBase;