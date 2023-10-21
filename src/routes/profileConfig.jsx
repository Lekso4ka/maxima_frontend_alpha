import Profile from '../pages/Profile'
import NewsPage from "../pages/News";
import Users from '../pages/Users/users';


export const profileConfig = {
    "PARTNER": {
        menu: [

            {
                name: 'Главная',
                path: '/',
                component: <Profile/>,
                isMenuItem: true,
                exact: true,
            },
            {
                name: 'Новости',
                path: '/news',
                component: <NewsPage />,
                isMenuItem: true,
                exact: true,
            },
            {
                name: 'Пользователи',
                path: '/users',
                component: <Users />,
                isMenuItem: true,
                exact: true,
            },
        ],
    },
    "STUDENT": {
        menu: [
        ],
    },
    "TEACHER": {
        menu: [
        ],
    },
    "PUBLIC": {
        menu: [
        ],
    },
}
