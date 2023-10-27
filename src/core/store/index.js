import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import disciplinesSlise from "./features/subjects/DisciplinesSlice";
export const store = configureStore({
    reducer: {
        user: userReducer,
        disciplines: disciplinesSlise,
    },
})

