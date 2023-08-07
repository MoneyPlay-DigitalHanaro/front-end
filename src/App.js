/* eslint-disable */
import React from 'react';
import './style/css/Admin.css';

// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Admin from './pages/admin/Admin.js';
import NavBar from './component/Navbar.js';
import SideBar from './component/Sidebar.js';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/mainPage/Main.js';
import AutoLayoutSizingExample from './pages/test';
import QrCode from './pages/QR_Student/qrStudent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<AutoLayoutSizingExample />} />
          <Route path="/qrcode" element={<QrCode />} />
        </Routes>
      </div>
    </div>
  );
}
// 왜안되는지 모르겠네

export default App;
