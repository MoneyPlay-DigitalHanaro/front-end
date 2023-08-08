/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기
import { Container } from 'react-bootstrap';
import NavBar from '../../component/Navbar.js';
import SideBar from '../../component/Sidebar.js';
import styles from '../../style/css/Admin.module.css';
import axios from 'axios';

function Admin() {
  const [plusPoint, setPlusPoint] = useState(''); // useState를 사용하여 plusPoint 상태 설정
  const [ID, setID] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [tableData, setTableData] = useState([
    { id: 1, name: 'Otto', email: '@mdo', points: 1111 },
    { id: 2, name: 'a', email: '@fat', points: 2222 },
    { id: 3, name: 'b', email: '@fat', points: 3333 },
    { id: 4, name: 'c', email: '@fat', points: 4444 },
    { id: 5, name: 'dd', email: '@fat', points: 5555 },
    { id: 6, name: 'eee', email: '@fat', points: 6666 },
    { id: 7, name: 'fff', email: '@fat', points: 7777 },
    { id: 8, name: 'gggg', email: '@fat', points: 8888 },

    // ... 나머지 데이터
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 중지
    console.log('plusPoint:', plusPoint); // 입력값 확인
    console.log('ID:', ID);

    try {
      const response = await axios.post('YOUR_SERVER_ENDPOINT', {
        ID: ID,
        plusPoint: plusPoint,
      });

      console.log(response.data); // 서버로부터의 응답을 확인
      // 여기서 필요한 다른 로직을 추가하십시오.
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const resetPoints = () => {
    const updatedData = tableData.map((item) => ({
      ...item,
      points: 0,
    }));
    setTableData(updatedData);
  };

  const handleOpenDialog = () => {
    setShowConfirmDialog(true);
  };

  const handleCloseDialog = () => {
    setShowConfirmDialog(false);
  };

  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked) {
      setID([...ID, id]);
    } else {
      setID(ID.filter((studentId) => studentId !== id));
    }
  };

  return (
    <div>
      <div className={styles.containerAdmin}>
        <SideBar />
        <NavBar />
        <div className={styles.box}>
          <h3>포인트 주기</h3>
          <div className="mb20">
            <form className={styles.form} onSubmit={handleSubmit}>
              <span className="ft22 mg15">지급 금액 </span>
              <input
                className={`${styles.inputbox} mgr30`}
                type="text"
                name="plusPoint"
                value={plusPoint}
                onChange={(e) => setPlusPoint(e.target.value)} // 입력값 변화에 따라 plusPoint 상태 업데이트
              />

              <button type="submit" className="btn btn-primary btn-lg">
                일괄 지급
              </button>
            </form>
          </div>
          <h3>포인트 초기화</h3>
          <p>
            <button type="button" class="btn btn-primary mgl50 btn-lg" onClick={handleOpenDialog}>
              일괄 초기화
            </button>
          </p>

          {/* <button
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
          </button> */}
        </div>

        {showConfirmDialog && (
          <div className="confirm-modal">
            <p>정말로 포인트를 초기화하겠습니까?</p>
            <button
              onClick={() => {
                resetPoints();
                // 초기화 로직
                console.log('포인트 초기화됨');
                handleCloseDialog();
              }}
            >
              확인
            </button>
            <button onClick={handleCloseDialog}>취소</button>
          </div>
        )}

        <div className={styles.main}>
          <h1>포인트관리 명단</h1>
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
              {tableData.map((row) => (
                <tr key={row.id}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                      onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                    />
                  </th>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
