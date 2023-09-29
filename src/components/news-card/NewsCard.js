import CardBaseTwo from "../ui/CardBaseTwo";
import {API_URL} from "../../core/http";
import {Button, Space} from "antd";
import React, {useEffect, useState} from "react";
import NewsPage from "../../pages/News";
import NewsService from "../../core/services/NewsService";
import Title from "antd/lib/typography/Title";
import CreateNewsModal from "../../containers/Modal/CreateNewsModal";



const NewsCard = () => {
    const [news, setNews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        NewsService.getAllNews()
            .then(r => setNews(r.data.data))
    }, [isModalOpen])


    return (
        <>

            <div>
                <CardBaseTwo/>

            </div>
            {/*<CreateNewsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>*/}

        </>
    );
};


export default NewsCard;