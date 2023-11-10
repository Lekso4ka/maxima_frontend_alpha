import {Input, Modal, Space} from 'antd';
// import NewsService from "../../core/services/NewsService";
import TextArea from "antd/es/input/TextArea";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTag} from "../../core/store/features/tags/tagsSlice";
// import {store} from '../../core/store'



const CreateTagsModal = ({isModalOpen, setIsModalOpen}) => {
    const [tag,setTag]=useState('')
    const dispatch = useDispatch();

    const handleOk = () => {
        if (tag.trim()) {
            dispatch(addTag(tag))
            setIsModalOpen(false)
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Добавление тега" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <Input placeholder="Введите тег" value={tag} onChange={(e) => setTag(e.target.value)}/>
                    {/*<TextArea rows={4} placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)}/>*/}

                </Space>
            </Modal>
        </>
    );
};
export default CreateTagsModal;