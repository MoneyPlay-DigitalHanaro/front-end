/* eslint-disable */
import React from 'react';
import './style/css/Admin.css';

// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Admin from './pages/admin/admin';
// import NavBar from './component/navbar';
// import SideBar from './component/Sidebar.js';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/mainPage/Main.js';
import AutoLayoutSizingExample from './pages/test';
import Login from './pages/oauth/Login';
import KakaoAuthHandle from './pages/oauth/KakaoAuthHandle';
// import UsernameFetcher from './pages/oauth/UsernameFetcher';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <div className="container">
        <Routes>
        <Route path='/login' element={<Login/>}/>
                    <Route
                        exact
                        path='/api/login/oauth2/code/kakao'
                        element={<KakaoAuthHandle/>}
                    />

          <Route path="/" element={<Main />} />
          <Route path="/test" element={<AutoLayoutSizingExample />} />
        </Routes>
        {/* <UsernameFetcher /> */}
      </div>

    </div>
  );
}
// 왜안되는지 모르겠네

export default App;




