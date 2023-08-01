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

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<AutoLayoutSizingExample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
