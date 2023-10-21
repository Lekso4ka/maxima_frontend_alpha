import React from 'react'
import AppRouter from '../components/smart/AppRouter'
import Header from '../components/Header/Header';
import { Layout } from 'antd';
import CardBaseTwo from "../components/ui/CardBaseTwo";
import '../assets/date/news.json';
import news from "../assets/date/news.json";



const { Footer, Content } = Layout;

function LayoutBase() {

    return (
        <Layout>
            <Header  />
        
            <Content className={'container'}>

                <AppRouter/>
            </Content>
            <Footer>© Учебный центр Maxima</Footer>
        </Layout>
    )
}

export default LayoutBase
