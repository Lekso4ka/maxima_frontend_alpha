import React, {useEffect, useState} from 'react'
import AuthService from "../../core/services/AuthService";
import Title from "antd/lib/typography/Title";
import news from "../../assets/date/news.json";
import CardBaseTwo from "../../components/ui/CardBaseTwo";
import {Vinni} from "../../assets/image/image"





const Profile = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        AuthService.getUserDto()
            .then(r => setUser(r.date))
    }, [])
    return (
        <>
            <Title level={3}>Добро пожаловать {user?.lastName} {user?.firstName}!</Title>
            {news.map(item => <CardBaseTwo title={item.title} date={item.date} img={Vinni.news_img_3} />)}

        </>
    )
}

export default Profile
