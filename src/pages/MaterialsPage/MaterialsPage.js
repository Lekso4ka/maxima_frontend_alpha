import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import TagsComponent from "../../components/tagsComponent/TagsComponent";
import TagsForm from "../../components/TegsForm/TagsForm";

function MaterialsPage () {
    const [tags, setTags] = useState([])

    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(15).substr(2,9),
                task: userInput
            }
            setTags([...tags, newItem])
        }

    }

    const removeTask = () => {

    }

    const handleToggle = () => {

    }


    return (
        <div className = {'materials'}>
            <h1>Материалы</h1>
            <h3>Список тегов: {tags.length}</h3>
            <div>
                <TagsForm addTask={addTask}></TagsForm>
                {tags.map((tags) => {
                        return (
                            <TagsComponent
                                todo={tags}
                                key={tags.id}
                                toggleTask={handleToggle}
                                removeTask={removeTask}
                            />


                        )
                 })}
            </div>
        </div>
    )
    
}

export default MaterialsPage;