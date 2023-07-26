/* eslint-disable */
import React from 'react';
import './style/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Admin from './pages/admin/admin.js';
import NavBar from './component/navbar.js';
import SideBar from './component/sidebar.js';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container g-0">
        <Routes>
          <Route path="/" element={<SideBar />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
