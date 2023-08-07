/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../style/css/Admin.module.css';
// import App.css

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <ul className="nav sidebar-nav">
        <li class="sidebar-brand">
          <a href="/">금전 놀이</a>
        </li>
        <li>
          <a href="/admin">포인트 관리</a>
        </li>

        <li>
          <a href="/admin">학생 관리</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
