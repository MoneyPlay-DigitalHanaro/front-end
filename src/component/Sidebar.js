/* eslint-disable */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../style/css/Admin.module.css';
import Logo from '../image/Footer/IecoText.png';
// import App.css

function SideBar() {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className={styles.sidebar}>
      <ul className="nav sidebar-nav">
        <li class="sidebar-brand">
          <a href="/admin"><img src={Logo} style={{width: "130px", height: "70px", backgroundColor: "white", borderRadius: "30px", padding: "15px"}}/></a>
        </li>
        <li className={styles.flexContainer}>
          <a href="/admin" className={styles.menuItem}>
            <img src={process.env.PUBLIC_URL + '/point.png'} className={`${styles.sidebarImage}`} />
            포인트 관리
          </a>
        </li>

        <li>
          <img src={process.env.PUBLIC_URL + '/childface.png'} className={`${styles.sidebarImage} mgr10 `} />
          <a href="/student" className={styles.menuItem}>
            학생 관리
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
