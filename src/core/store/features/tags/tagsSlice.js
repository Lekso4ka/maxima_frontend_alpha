import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from "jwt-decode";

const initialState = {tags: []};

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag: (state, action) => {
            state.tags.push(action.payload)
        },
        delTag: (state, action) => {
            state.tags = state.tags.filter(el => el !== action.payload);
        }
    }

})

export const { addTag, delTag } = tagsSlice.actions
export default tagsSlice.reducer