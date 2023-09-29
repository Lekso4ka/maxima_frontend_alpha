import React from 'react'
import AppRouter from '../components/smart/AppRouter'
import Header from '../components/Header/Header';
import { Layout } from 'antd';


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
