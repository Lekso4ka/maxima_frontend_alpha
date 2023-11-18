import {Button, Input, Modal, Space} from 'antd';
import React, {useEffect, useState} from "react";
import {addDisciplines, delDisciplines} from "../../core/store/features/subjects/DisciplinesSlise";
import {useDispatch, useSelector} from "react-redux";
import $api from "../../core/http";



const CreateDisciplinesModal = ({isModalOpen, setIsModalOpen}) => {
    const [discipline, setDiscipline] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const [info, setInfo] = useState([]);

    const handleOk =async ()=>{
        const result = await $api.post("/disciplines",{
            name: text
        })
        console.log(result); //вывести в консоль
        setInfo(prev => [...prev, result.data])  //загружает с сервера значение
        setText("");  //обнулить ввод
        setIsModalOpen(false);
    }

    useEffect( ()=> {
        $api.get("/disciplines")
            .then(result => {
                setInfo(result.data.data)
                // console.log(result.data)
            })
    },[])



    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Добавление дисциплины" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <input placeholder="Введите дисциплину" value={text} onChange={e => setText(e.target.value)}/>
                    {/*<TextArea rows={4} placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)}/>*/}
                </Space>
            </Modal>
        </>
    );
};
export default CreateDisciplinesModal;