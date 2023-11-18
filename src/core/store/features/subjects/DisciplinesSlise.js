import {createSlice} from "@reduxjs/toolkit";
import $api from "../../../http";

const initialState = {disciplines:['html', 'javascript', 'python']};



export const DisciplinesSlise = createSlice(
    {
        name: "disciplines",
        initialState,
        reducers: {
            addDisciplines: (state, action) =>{
                if(!state.disciplines.includes(action.payload)){
                    state.disciplines.push(action.payload)

                }

            },
            delDisciplines: (state, action) =>{
                state.disciplines = state.disciplines.filter(el => el !== action.payload)
            },
        }
    }
)
export const {addDisciplines, delDisciplines } = DisciplinesSlise.actions

export default DisciplinesSlise.reducer