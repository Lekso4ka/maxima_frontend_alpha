import React, {useEffect, useState} from 'react'
import AuthService from "../../core/services/AuthService";
import Title from "antd/lib/typography/Title";
import NewsPage from "../News";
import CardBase from "../../components/ui/CardBase";
import {API_URL} from "../../core/http";
import {Space} from "antd";
import NewsCard from "../../components/news-card/NewsCard";



const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        AuthService.getUserDto()
            .then(r => setUser(r.data))
    }, [])
    return (
        <>
            <Title level={3}>Добро пожаловать {user?.lastName} {user?.firstName}!</Title>
            <NewsCard/>

        </>
    )
}

export default Profile
