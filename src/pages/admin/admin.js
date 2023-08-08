/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기
import { Container } from 'react-bootstrap';
import NavBar from '../../component/Navbar.js';
import SideBar from '../../component/Sidebar.js';
import styles from '../../style/css/Admin.module.css';
import axios from 'axios';

function Admin() {
  const [amount, setAmount] = useState(''); // useState를 사용하여 amount 상태 설정
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 중지
    console.log('Amount Submitted:', amount); // 입력값 확인
    console.log('Selected Students:', selectedStudents);

    // 필요한 다른 로직 추가
  };

  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked) {
      setSelectedStudents([...selectedStudents, id]);
    } else {
      setSelectedStudents(selectedStudents.filter((studentId) => studentId !== id));
    }
  };

  return (
    <div>
      <div className={styles.containerAdmin}>
        <SideBar />
        <NavBar />
        <div className={styles.box}>
          <h3>포인트 주기</h3>
          <div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <span className="ft22 mg15">지급 금액 </span>
              <input
                className={`${styles.inputbox} mgr30`}
                type="text"
                name="plusPoint"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} // 입력값 변화에 따라 amount 상태 업데이트
              />
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
                onChange={(e) => handleCheckboxChange(1, e.target.checked)}
              />
              <button type="submit" className="btn btn-primary btn-lg">
                일괄 지급
              </button>
            </form>
          </div>
          <h3>포인트 초기화</h3>
          <p>
            <button type="button" class="btn btn-primary mgl50 btn-lg">
              일괄 초기화
            </button>
          </p>

          <button
            onClick={() => {
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then((결과, i) => {
                  console.log(결과.data);
                })
                .catch(() => {
                  console.log('실패함');
                });
            }}
          >
            버튼
          </button>
        </div>
        <div className={styles.main}>
          <h1>학생관리 명단</h1>
          <table class="table mgtop50">
            <thead>
              <tr class="table-active">
                <th>선택</th>
                <th>ID</th>
                <th>이름</th>
                <th>이메일</th>
                <th>포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>1</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>2</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>3</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>4</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>5</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>6</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>7</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
