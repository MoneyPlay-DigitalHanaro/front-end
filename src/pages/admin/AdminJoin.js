/* eslint-disable */
import React, { useState, useEffect } from 'react';
import NavBar from '../../component/Navbar.js';
import SideBar from '../../component/Sidebar.js';
import styles from '../../style/css/Admin.module.css';

function AdminJoin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기서 회원가입 로직을 구현하세요.
    console.log({ name, email, points });
  };

  return (
    <div className={styles.containerAdmin}>
      <NavBar />
      <SideBar />

      <div className="join-form-container">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">이름:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="input-group">
            <label htmlFor="email">이메일:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
            <label htmlFor="points">포인트:</label>
            <input type="number" id="points" value={points} onChange={(e) => setPoints(e.target.value)} required />
          </div>

          <button type="submit">가입하기</button>
        </form>
      </div>
    </div>
  );
}

export default AdminJoin;
