import React from "react";
import { Link} from "react-router-dom";

import "./style.css";

function Header () {
    return <header>
            <div><Link to={'/'}>Главная</Link></div>
            <div><Link to={'/courses'}>Курсы</Link></div>
            <div><Link to={'/users'}>Пользователи</Link></div>
            <div><Link to={'/news'}>Новости</Link></div>
            <div><Link to={'/courses'}>Материалы</Link></div>
    </header>
}

export default Header;