import React from "react";
import { Link} from "react-router-dom";
import "./style.css";

function Header () {


    
    return (
    <>
        <nav>
            <Link to={'/'}>Главная</Link>
            <Link to={'/courses'}>Курсы</Link>
            <Link to={'/users'}>Пользователи</Link>
            <Link to={'/news'}>Новости</Link>
            <Link to={'/materials'}>Материалы</Link>
        </nav>
    </>
    )
}

    

export default Header;