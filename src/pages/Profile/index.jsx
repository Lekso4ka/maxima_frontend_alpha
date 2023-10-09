import React, {useEffect, useState} from 'react'
import AuthService from "../../core/services/AuthService";
import Title from "antd/lib/typography/Title";
import news from "../../assets/date/news.json";
import CardBaseTwo from "../../components/ui/CardBaseTwo";


const Profile = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        AuthService.getUserDto()
            .then(r => setUser(r.date))
    }, [])
    return (
        <>
            <Title level={3}>Добро пожаловать {user?.lastName} {user?.firstName}!</Title>

            {/*картинка с инета*/}
            {news.map(item => <CardBaseTwo title={item.title} createdAt={item.createdAt} titleImage={item.titleImage}
                                           text={item.text}/>)}

            {/*картинка локальная*/}
            {news.map(item => <CardBaseTwo title={item.title} createdAt={item.createdAt} img={item.titleImage}/>)}


        </>
    )
}

export default Profile
