/* eslint-disable */
import React from 'react';
import './style/css/Admin.module.css';

// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Admin from './pages/admin/Admin.js';
import NavBar from './component/Navbar.js';
import SideBar from './component/Sidebar.js';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/mainPage/Main.js';
import AutoLayoutSizingExample from './pages/test';
import AutoLayoutSizingExample2 from './pages/test2';
import QrCode from './pages/QR_Student/qrStudent';
import Join from './pages/Join/Join';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/testadmin" element={<AutoLayoutSizingExample2 />} />
      </Routes>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<AutoLayoutSizingExample />} />
          <Route path="/qrcode" element={<QrCode />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
