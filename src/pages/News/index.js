import React, {useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import CardBase from "../../components/ui/CardBase";
import NewsService from "../../core/services/NewsService";
import CreateNewsModal from "../../containers/Modal/CreateNewsModal";
import {API_URL} from "../../core/http";

const NewsPage = () => {
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
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}>Новости</Title>
                <Button type="primary" onClick={showModal}>
                    Создать новость
                </Button>
            </Space>
            <Space align={'start'} wrap={true}>
                {
                    news.map(n => <CardBase
                        key={n.id}
                        img={`${API_URL}/files/${n.titleImage.storageFileName}`}
                        title={n.title}
                        desc={n.text}
                    />)
                }
            </Space>
            <CreateNewsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
};

export default NewsPage;