import Profile from '../pages/Profile'
import NewsPage from "../pages/News";

export const profileConfig = {
    "PARTNER": {
        menu: [

            {
                name: 'Пользователи',
                path: '/users',
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
