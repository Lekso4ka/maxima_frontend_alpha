import React, {useEffect, useState} from 'react'
import AuthService from "../../core/services/AuthService";
import Title from "antd/lib/typography/Title";
import news from "../../assets/date/news.json";
import CardBaseTwo from "../../components/ui/CardBaseTwo";


import img1 from "../../assets/image/vinni/aaimages.png"
import img2 from "../../assets/image/vinni/aimages.png"
import img3 from "../../assets/image/vinni/apooh_PNG37567.png"
import img4 from "../../assets/image/vinni/avinni-pukh-v-png.png"

const images = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4
}



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
            {news.map(item => <CardBaseTwo title={item.title} date={item.date} img={item.img} text={item.text} />)}

            {/*картинка локальная*/}
            {news.map(item => <CardBaseTwo title={item.title} date={item.date} img={images[item.img]} />)}


        </>
    )
}

export default Profile
