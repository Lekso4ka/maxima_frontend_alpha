import React, {useEffect, useState} from 'react'
import AuthService from "../../core/services/AuthService";
import Title from "antd/lib/typography/Title";
import news from "../../assets/date/news.json";
import CardBaseTwo from "../../components/ui/CardBaseTwo";


const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        AuthService.getUserDto()
            .then(r => setUser(r.data))
    }, [])
    return (
        <>
            <Title level={3}>Добро пожаловать {user?.lastName} {user?.firstName}!</Title>
            {/*картинка с инета*/}
            {news.map(item => <CardBaseTwo {...item}/>)} //скопировано с IndexPage
        </>
    )
}

export default Profile
