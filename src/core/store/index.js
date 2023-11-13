import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import disciplinesSlise from "./features/subjects/DisciplinesSlise";
import tagsReducer from './features/tags/tagsSlice'

export const store = configureStore({
    reducer: {
        disciplines: disciplinesSlise,
        user: userReducer,
        tags: tagsReducer
    },
})

