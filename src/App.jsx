import { Route,Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import UsersPage from './pages/UsersPage/UsersPage';
import NewsPage from './pages/NewsPage/NewsPage'; 
import MaterialsPage from './pages/MaterialsPage/MaterialsPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
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
