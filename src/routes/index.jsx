import React from 'react'
import Login from '../pages/Login'

export const publicRoutes = [
    {
        path: '/login',
        component: <Login />,
        exact: true,
    }
]
