/* eslint-disable */
import React from 'react';
import './style/css/App.css';
// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Admin from './pages/admin/admin.js';
import NavBar from './component/navbar.js';
import SideBar from './component/sidebar.js';
import NewsList from './pages/NewsPage/NewsList';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container g-0">
        <Routes>
          <Route path="/" element={<SideBar />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/news" element={<NewsList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
