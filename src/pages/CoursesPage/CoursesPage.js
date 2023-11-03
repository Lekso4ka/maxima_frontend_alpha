import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {addDisciplines, delDisciplines} from "../../core/store/features/subjects/DisciplinesSlice";
import {useParams} from "react-router-dom";
import store from "../../core/store"
import Disciplines from '../../components/disciplines/Disciplines';
import {CloseOutlined} from "@ant-design/icons";

import Title from "antd/lib/typography/Title";
import news from "../../assets/date/news.json";
import Table from "../../components/table/Table";
import {Button, Space, Input} from "antd";

import CreateDisciplinesModal from "../../containers/Modal/CreateDisciplinesModal";
import './style.css'




const CoursesPage = () => {
    const [modalActive, setModalActive] = useState(false); //для второго окна

    const disciplines = useSelector(state => state.disciplines.disciplines);
    const dispatch = useDispatch();

    const [news, setNews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}>Дисциплины</Title>
                <Button type="primary" onClick={showModal}>
                    Добавить дисциплину
                </Button>

            </Space>
            <CreateDisciplinesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>


            <ul>
                <Space align={'start'} direction={"horizontal"} wrap={true}>
                    <li>{disciplines}</li>
                    <div>{disciplines.map(el=><div key={el}>
                        <span></span>
                        <CloseOutlined onClick={e =>dispatch(delDisciplines(el))}/>
                    </div>)
                    }</div>

                </Space>
            </ul>


        </>
    )



    // const dispatsh = useDispatch ()
    // const tags = useSelector (state => state.tags)
    // const {CoursesPage} = useState()
    // const addDisciplines= (disciplines) => {
    //     dispatsh ( {type: "ADD_DISCIPLINES", payload: disciplines})
    // }
    //
    // const  delDisciplines = (disciplines) => {
    //     dispatsh ({type: "DEL_DISCIPLINES", payload: disciplines})
    // }
    // return (
    //     <div className = {'courses'}>
    //         <h1>Курсы</h1>
    //         <h3>Дисциплины</h3>
    //
    //         <button onClick={() => addDisciplines(prompt())}>добавить дисциплину</button>
    //         <button onClick={() => delDisciplines()}>удалить дисциплину</button>
    //
    //     </div>
    // )
}

export default CoursesPage;