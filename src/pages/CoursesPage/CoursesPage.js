import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import disciplinesSlice, {addDisciplines, DisciplinesSlice} from "../../core/store/features/subjects/DisciplinesSlice";
import {useParams} from "react-router-dom";
import Disciplines from '../../components/disciplines/Disciplines'


function CoursesPage () {
    const dispatch = useDispatch();

    const handleAddDisciplines = () => {
        dispatch(addDisciplines(disciplinesSlice()))
    }

    return (
        <Disciplines/>
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