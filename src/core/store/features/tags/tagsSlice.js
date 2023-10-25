import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from "jwt-decode";

const initialState = {
    tags: []
};

export const tagsSlice = createSlice({
    name: 'tags',

    initialState,
    reducers: {
        //addTags("react")
        addTag: (state, action) => {
            state.tags.push(action.payload);

        },
        //delTag("react")
        delTag: (state,action) => {
            state.tags = state.tags.filter(el => el !== action.payload)
        }, 
    },
})

// Action creators are generated for each case reducer function
export const { login, logOut } = userSlice.actions

export default tagsSlice.reducer