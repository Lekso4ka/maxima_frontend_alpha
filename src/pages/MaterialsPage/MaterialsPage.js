import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import TagsComponent from "../../components/tagsComponent/TagsComponent";
import TagsForm from "../../components/TegsForm/TagsForm";

function MaterialsPage () {

    const tags = useSelector(state => state.tags.tags)  //добавлено




    return (
        <div className = {'materials'}>
            <h1>Материалы</h1>
            <h3>Список тегов: {tags.length}</h3>
            <div>
                <TagsForm />
                {tags.map((tag) => {
                        return (
                            <TagsComponent
                                name = {tag}
                                key ={tag}
                            />


                        )
                 })}
            </div>
        </div>
    )
    
}

export default MaterialsPage;