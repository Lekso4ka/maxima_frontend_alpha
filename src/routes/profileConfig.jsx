import Profile from '../pages/Profile'
import NewsPage from "../pages/NewsPage/NewsPage";
import Users from '../pages/UsersPage/UsersPage';
import MaterialsPage from "../pages/MaterialsPage/MaterialsPage";
import CoursesPage from "../pages/CoursesPage/CoursesPage";


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
                name: 'Курсы',
                path: '/courses',
                component: <CoursesPage />,
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
            {
                name: 'Материалы',
                path: '/materials',
                component: <MaterialsPage />,
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
