import {createSlice} from "@reduxjs/toolkit";


const Disciplines = {
    disciplines: ['html', 'javascript', 'python'], // [item1, item2, item3]
    // countDisciplines: 0,

};

export const Disciplines = createSlice(
    {
        name: "disciplines",
        initialState,
        reducers: {
            addDisciplines: (state, action) =>{
                state.disciplines.push(action.payload)
            },
            delDisciplines: (state, action) =>{
                state.disciplines.filter(el => el !== action.payload)
            },
        }
    }
)
export const {addDisciplines, delDisciplines } = Disciplines.actions

export default Disciplines.reducer