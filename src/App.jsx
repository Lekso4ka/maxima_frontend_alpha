import { Route,Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import UsersPage from './pages/UsersPage/UsersPage';
import NewsPage from './pages/NewsPage/NewsPage'; 
import MaterialsPage from './pages/MaterialsPage/MaterialsPage';
import Header from './components/Header/Header';
import LayoutBase from './containers/LayoutBase'
import AuthService from "./core/services/AuthService";
import {useDispatch} from "react-redux";
import {login, logOut} from "./core/store/features/user/userSlice";
import {useEffect} from "react";

function App() {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch();

  useEffect(() => {
    AuthService.checkToken(token)
        .then(() => dispatch(login(token)))
        .catch(() => dispatch(logOut()))
  }, [])
  return (
    <div className="App">
      <LayoutBase/>
        <Routes>
          <Route path={'/'} element={<IndexPage/>}></Route>
          <Route path={'/courses'} element={<CoursesPage/>}></Route>
          <Route path={'/users'} element={<UsersPage/>}></Route>
          <Route path={'/materials'} element={<MaterialsPage/>}></Route>
          <Route path={'/news'} element={<NewsPage/>}></Route>
        </Routes>
            
     
      
    </div>  
  );
}

export default App;
