import React, {useEffect, useState} from 'react'
import AuthService from "../../core/services/AuthService";
import Title from "antd/lib/typography/Title";
import news from "../../assets/date/news.json";
import news_local from "../../assets/date/news_local.json";
import CardBaseTwo from "../../components/ui/CardBaseTwo";

import images from "../../assets/image/vinni";
function IndexPage () {
    const [user, setUser] = useState(null);

    useEffect(() => {
        AuthService.getUserDto()
            .then(r => setUser(r.data))
    }, [])
    return (
        <>
        <h1>Главная</h1>
            <Title level={3}>Добро пожаловать {user?.lastName} {user?.firstName}!</Title>
        {/*картинка с инета*/}
        {news.map(item => <CardBaseTwo {...item}/>)}

{/*картинка локальная*/}
{news_local.map(item => <CardBaseTwo {...item} titleImage={images[item.titleImage]}/>)}   
        </>
    )
    
}

export default IndexPage;
