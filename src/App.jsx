import React, {useEffect} from 'react'
import './style/style.scss'
import LayoutBase from './containers/LayoutBase'
import AuthService from "./core/services/AuthService";
import {useDispatch} from "react-redux";
import {login, logOut} from "./core/store/features/user/userSlice";
import news from './assets/data/news.json'
import CardBaseTwo from "./components/ui/CardBaseTwo";

function App() {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch();

    useEffect(() => {
        AuthService.checkToken(token)
            .then(() => dispatch(login(token)))
            .catch(() => dispatch(logOut()))
    }, [])

    return (

        <LayoutBase/>
    )
}

export default App
