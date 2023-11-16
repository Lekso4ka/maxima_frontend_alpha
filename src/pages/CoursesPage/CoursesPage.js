import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import {addDisciplines, delDisciplines} from "../../core/store/features/subjects/DisciplinesSlise";
import {CloseOutlined} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import {Button, Space, Input} from "antd";
import CreateDisciplinesModal from "../../containers/Modal/CreateDisciplinesModal";
import './style.css';
import $api from "../../core/http";





const CoursesPage = () => {
    const [modalActive, setModalActive] = useState(false); //для второго окна
    const dispatch = useDispatch();
    const [news, setNews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
//    Дисциплины будут получаться из базы данных и пока никак не связаны м Redux!!!
    const [info, setInfo] = useState([]);
    const [text, setText] = useState("");

    // const infoHandler =async ()=>{
    //     const result = await $api.post("/disciplines",{
    //         name: text
    //     })
    //     console.log(result); //вывести в консоль
    //     setInfo(prev => [...prev, result.data])  //загружает с сервера значение
    //     setText("");  //обнулить ввод
    // }

    useEffect( ()=> {
        $api.get("/disciplines")
            .then(result => {
        setInfo(result.data.data)
        // console.log(result.data)
    })
    },[])



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

                {/*<Space align={'start'} direction={"horizontal"} wrap={true}>*/}
                {/*    <div>{text.map(el=><div key={el}>*/}
                {/*        <span>{el}</span>*/}
                {/*        /!*<CloseOutlined onClick={e =>dispatch(delDisciplines(el))}/>*!/*/}
                {/*        <CloseOutlined onClick={e => setText(e.target.value)}/>*/}
                {/*    </div>)*/}
                {/*    }</div>*/}

                {/*</Space>*/}
            </ul>
            {/*<div>*/}
                {info.map(el => <li key={el.id}>{el.name}</li>)}
            {/*    <input value={text} onChange={e => setText(e.target.value)}/>*/}
            {/*    <button onClick={infoHandler}>Ok</button>*/}
            {/*</div>*/}
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