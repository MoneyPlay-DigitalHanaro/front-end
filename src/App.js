/* eslint-disable */
import React from 'react';
import './style/css/Admin.module.css';
// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Admin from './pages/admin/Admin';
// import NavBar from './component/navbar';
// import SideBar from './component/Sidebar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/mainPage/Main.js';
import AutoLayoutSizingExample from './pages/test';
import Login from './pages/oauth/Login';
import KakaoAuthHandle from './pages/oauth/KakaoAuthHandle';
// import UsernameFetcher from './pages/oauth/UsernameFetcher';
import NavBar from './component/Navbar';
import SideBar from './component/Sidebar';
import NewsList from './pages/NewsPage/NewsList';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoLayoutSizingExample2 from './pages/test2';
import Join from './pages/Join/Join';
import Footer from './component/Footer';
import MyPage from './pages/myPage/MyPage';
import AdditionalInfo from './pages/oauth/AdditionalInfo';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/testadmin" element={<AutoLayoutSizingExample2 />} />
        </Routes>
      </div>
      <div className="App-container">
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/additionalInfo' element={<AdditionalInfo/>}/>
                    <Route
                        exact
                        path='/api/login/oauth2/code/kakao'
                        element={<KakaoAuthHandle/>}
                    />

          <Route path="/" element={<Main />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/test" element={<AutoLayoutSizingExample />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;




