import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTag, delTag} from "../../core/store/features/tags/tagsSlice";
import {useParams} from "react-router-dom";
import {store} from "../../core/store";
import {CloseOutlined} from "@ant-design/icons";
import TagsComponent from "../../components/tagsComponent/TagsComponent";
import TagsForm from "../../components/TagsForm/TagsForm";
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import CreateTagsModal from "../../containers/Modal/CreateTagsModal";



function MaterialsPage () {

    const tags = useSelector(state => state.tags.tags)  //добавлено

    const [modalActive, setModalActive] = useState(false); //для второго окна

    const tag = useSelector(state => state.tag);
    const dispatch = useDispatch();

    const [news, setNews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}>Теги</Title>
                <Button type="primary" onClick={showModal}>
                    Добавить тег
                </Button>

            </Space>
            <CreateTagsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <div className={'materials'}>
                <h1>Материалы</h1>
                <h3>Список тегов: {tags.length}</h3>
                <div>
                    <TagsForm/>
                    {tags.map((tag) => {
                        return (
                            <TagsComponent
                                name={tag}
                                key={tag}
                            />


                        )
                    })}
                </div>
            </div>
        </>

    );
    
}

export default MaterialsPage;