import { useState} from "react";
import {useDispatch} from "react-redux"; //добавлено
import {addTag} from "../../core/store/features/tags/tagsSlice"; //добавлено

function  TagsForm() {
    // убрано { addTask }
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch();  //добавлено


    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        // console.log(userInput); //проверка вывода в консоль перед тем как делать dispatch
        // убрали addTask(userInput)

        //условием исключили отправку пустого значения
        if (userInput){
            dispatch(addTag(userInput))  //добавлено
            setUserInput("")
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}  //исправлено handleChange на userInput
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите тег"
            />
            <button>Добавить тег</button>
        </form>
    )
}

export default TagsForm