import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import tagsReducer from "./features/tags/tagsSlice"
export const store = configureStore({
    reducer: {
        user: userReducer,
        tags: tagsReducer,
    },
})