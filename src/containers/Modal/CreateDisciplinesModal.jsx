import {Input, Modal, Space} from 'antd';
import React, {useState} from "react";
import {addDisciplines, delDisciplines} from "../../core/store/features/subjects/DisciplinesSlise";
import {useDispatch} from "react-redux";


const CreateDisciplinesModal = ({isModalOpen, setIsModalOpen}) => {
    const [discipline, setDiscipline] = useState('');
    // const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleOk = () => {
        if (discipline.trim()){
            dispatch(addDisciplines(discipline))
            setIsModalOpen(false)
        }
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Добавление дисциплины" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <Input placeholder="Введите дисциплину" value={discipline} onChange={(e) => setDiscipline(e.target.value)}/>
                    {/*<TextArea rows={4} placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)}/>*/}
                </Space>
            </Modal>
        </>
    );
};
export default CreateDisciplinesModal;