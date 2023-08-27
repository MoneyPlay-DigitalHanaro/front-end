/* eslint-disable */
import styles from "../style/css/Admin.module.css";
import "../style/css/App.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function NavBar() {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  const [userData, setUserData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/admin");
        setUserData(response.data.user); // "user" 키를 기반으로 데이터를 설정
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // 함수 호출하여 실행
  }, []);
  return (
    <div className="navbar">
      <nav>
        <img
          src={process.env.PUBLIC_URL + "/person.png"}
          className={styles.personImage}
        />
        <div className={styles.teacher}>
          <span> 1학년 3반 담임 김익환 </span>
          <p> {userData.studentName}</p>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
