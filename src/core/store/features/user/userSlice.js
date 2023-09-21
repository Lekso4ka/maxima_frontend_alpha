import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from "jwt-decode";

const initialState = {
    isAuth: false,
    role: "PUBLIC"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.role = jwtDecode(action.payload).authorities[0];
        },
        logOut: (state) => {
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('token')
            state.isAuth = false;
            state.role = "PUBLIC";
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logOut } = userSlice.actions

export default userSlice.reducer