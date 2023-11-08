import {createSlice} from "@reduxjs/toolkit";

const initialState = {disciplines:['html', 'javascript', 'python']};



export const DisciplinesSlice = createSlice(
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
export const {addDisciplines, delDisciplines } = DisciplinesSlice.actions

export default DisciplinesSlice.reducer