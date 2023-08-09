/* eslint-disable */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../style/css/Admin.module.css';
// import App.css

function SideBar() {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className={styles.sidebar}>
      <ul className="nav sidebar-nav">
        <li class="sidebar-brand">
          <a href="/">금전 놀이</a>
        </li>
        <li className={styles.flexContainer}>
          <a href="/admin" className={styles.menuItem}>
            <img src={process.env.PUBLIC_URL + '/point.png'} className={`${styles.sidebarImage}`} />
            포인트 관리
          </a>
        </li>

        <li>
          <img src={process.env.PUBLIC_URL + '/childface.png'} className={`${styles.sidebarImage} mgr10 `} />
          <a href="/admin" className={styles.menuItem}>
            학생 관리
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
