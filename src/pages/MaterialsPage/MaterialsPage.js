import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addTag, delTag} from "../../core/store/features/tags/tagsSlice";

import {CloseOutlined} from "@ant-design/icons";

import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import CreateTagsModal from "../../containers/Modal/CreateTagsModal";
import $api from "../../core/http";



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

    const [info, setInfo] = useState ([]);
    const [text, setText] = useState("");

    const infoHandler = async () => {
        const result = await $api.post("/materials/tags", {
            name: text
        })
        console.log(result);
        setInfo(prev => [...prev,result.data]);
        setText("");
    }

    useEffect(() => {
        $api.get("/materials/tags")
            .then(result => {
                setInfo(result.data.data)
            })
    }, [])

    useEffect(() => {
        console.log("info",info);
    }, [info])

    return (
        <>
            <CreateTagsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <div className={'materials'}>
                <h1>Материалы</h1>
                <Space align={'start'} wrap={true} size={100}>
                    <Title level={3}>Теги</Title>
                    <Button type="primary" onClick={showModal}>
                        Добавить тег
                    </Button>

                </Space>
                <ul>
                    <Space align={'start'} direction={"horizontal"} wrap={true}>
                        <div>{tags.map(el=><div key={el}>
                            <span>{el}</span>
                            <CloseOutlined onClick={e =>dispatch(delTag(el))}/>
                        </div>)
                        }</div>

                    </Space>
                </ul>
            </div>

            <ul>
                {info?. map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
            <div>
                <input value={text} onChange={e=>setText(e.target.value)}/>
                <button onClick={infoHandler}>Ok</button>
            </div>

        </>

    );
    
}

export default MaterialsPage;