import {Route, Routes} from 'react-router-dom'
import Login from '../../../pages/Login'
import {publicRoutes} from '../../../routes'
import {profileConfig} from '../../../routes/profileConfig'
import {v4 as uuidv4} from 'uuid'
import Profile from '../../../pages/Profile'
import {useEffect} from "react";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const role = useSelector(state => state.user.role)
    const isAuth = useSelector(state => state.user.isAuth)

    useEffect(() => {
        console.log(`Current role - ${role}`)
    }, [role])

    return (
        <Routes>
            {isAuth ? <Route element={<Profile/>} path='/'/> : null}
            {profileConfig[role].menu.map((route) => {
                if (route.children) {
                    return route.children.map((r) => (
                        <Route element={r.component} path={r.path} key={uuidv4()}/>
                    ))
                }
                return <Route element={route.component} path={route.path} key={uuidv4()}/>
            })}
            {publicRoutes.map((route) => (
                <Route
                    element={route.component}
                    path={route.path}
                    key={uuidv4()}
                />
            ))}
            {
                role !== "PUBLIC"
                    ? <Route path='*' element={<Profile/>}/>
                    : <Route path='*' element={<Login/>}/>
            }
        </Routes>
    )
}

export default AppRouter
