import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from "jwt-decode";

const initialState = {tags: ['html', 'button', 'div']};

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag: (state, action) => {
            //Метод includes() определяет, содержит ли массив определённый элемент,
            // возвращая в зависимости от этого true или false.
            //dв общем ниже исключили повторения
           if(!state.tags.includes(action.payload)){
               state.tags.push(action.payload)
           }


        },
        delTag: (state, action) => {
            state.tags = state.tags.filter(el => el !== action.payload);
        }
    }

})

export const { addTag, delTag } = tagsSlice.actions
export default tagsSlice.reducer