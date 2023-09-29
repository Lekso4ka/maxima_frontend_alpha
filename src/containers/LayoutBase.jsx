import React from 'react'
import AppRouter from '../components/smart/AppRouter'
import Header from "../components/ui/Header/HeaderBase";
import { Layout } from 'antd';
import CardBaseTwo from "../components/ui/CardBaseTwo";
import '../assets/data/news.json';
import news from "../assets/data/news.json";


const { Footer, Content } = Layout;

function LayoutBase() {

    return (
        <Layout>
            <Header />
            <Content className={'container'}>

                <AppRouter/>
            </Content>
            <Footer>© Учебный центр Maxima</Footer>
        </Layout>
    )
}

export default LayoutBase
