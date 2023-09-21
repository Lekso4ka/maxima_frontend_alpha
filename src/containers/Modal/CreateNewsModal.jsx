import {Input, Modal, Space} from 'antd';
import NewsService from "../../core/services/NewsService";
import TextArea from "antd/es/input/TextArea";
import {useState} from "react";

const CreateNewsModal = ({isModalOpen, setIsModalOpen}) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleOk = () => {
        NewsService.createNews({
            title,
            text
        })
            .then(() => {
                setIsModalOpen(false);
            })
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                    <Input placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <TextArea rows={4} placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)}/>
                </Space>
            </Modal>
        </>
);
};
export default CreateNewsModal;