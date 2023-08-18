/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기
import { Container } from 'react-bootstrap';
import NavBar from '../../component/Navbar.js';
import SideBar from '../../component/Sidebar.js';
import styles from '../../style/css/Admin.module.css';
import axios from 'axios';
import AdminChart from '../../component/AdminChart.js';

function Admin() {
  const [tableData, setTableData] = useState([
    { id: 1, name: '김영희', email: 'younghee1@naver.com', points: '8,250,000' },
    { id: 2, name: '이철수', email: 'cheolsu2@naver.com', points: '5,750,000' },
    { id: 3, name: '박지수', email: 'jisoo3@naver.com', points: '6,150,000' },
    { id: 4, name: '최민호', email: 'minho4@naver.com', points: '3,500,000' },
    { id: 5, name: '정은경', email: 'eunkyung5@naver.com', points: '4,250,000' },
    { id: 6, name: '백현진', email: 'hyunjin6@naver.com', points: '7,910,000' },
    { id: 7, name: '서유리', email: 'yuri7@naver.com', points: '5,780,000' },
    { id: 8, name: '이민재', email: 'minjae8@naver.com', points: '6,980,000' },
    { id: 9, name: '김영희', email: 'younghee1@naver.com', points: '9,250,000' },
    { id: 10, name: '이철수', email: 'cheolsu2@naver.com', points: '5,750,000' },
    { id: 11, name: '박지수', email: 'jisoo3@naver.com', points: '6,150,000' },
    { id: 12, name: '최민호', email: 'minho4@naver.com', points: '3,500,000' },
    { id: 13, name: '정은경', email: 'eunkyung5@naver.com', points: '4,250,000' },
    { id: 14, name: '백현진', email: 'hyunjin6@naver.com', points: '7,910,000' },
    { id: 15, name: '서유리', email: 'yuri7@naver.com', points: '5,780,000' },
    { id: 16, name: '이민재', email: 'minjae8@naver.com', points: '6,980,000' },
    { id: 44, name: '특별해', email: 'minjae8@naver.com', points: '6,980,000' },
    { id: 17, name: '김영희', email: 'younghee1@naver.com', points: '8,250,000' },
    { id: 28, name: '이철수', email: 'cheolsu2@naver.com', points: '5,750,000' },
    { id: 39, name: '박지수', email: 'jisoo3@naver.com', points: '6,150,000' },
    { id: 40, name: '최민호', email: 'minho4@naver.com', points: '3,500,000' },
    { id: 50, name: '정은경', email: 'eunkyung5@naver.com', points: '4,250,000' },
    { id: 68, name: '백현진', email: 'hyunjin6@naver.com', points: '7,910,000' },
    { id: 77, name: '서유리', email: 'yuri7@naver.com', points: '5,780,000' },
    { id: 85, name: '이민재', email: 'minjae8@naver.com', points: '6,980,000' },
    { id: 93, name: '김영희', email: 'younghee1@naver.com', points: '8,250,000' },
    { id: 101, name: '이철수', email: 'cheolsu2@naver.com', points: '5,750,000' },
    { id: 112, name: '박지수', email: 'jisoo3@naver.com', points: '6,150,000' },
    { id: 122, name: '최민호', email: 'minho4@naver.com', points: '3,500,000' },
    { id: 133, name: '정은경', email: 'eunkyung5@naver.com', points: '4,250,000' },
    { id: 64, name: '백현진', email: 'hyunjin6@naver.com', points: '7,910,000' },
    { id: 75, name: '서유리', email: 'yuri7@naver.com', points: '5,780,000' },
    { id: 86, name: '이민재', email: 'minjae8@naver.com', points: '6,980,000' },
    { id: 55, name: '특별해', email: 'minjae8@naver.com', points: '6,980,000' },

    // ... 나머지 데이터
  ]);
  const [plusPoint, setPlusPoint] = useState(''); // useState를 사용하여 plusPoint 상태 설정
  const [ID, setID] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 중지
    console.log('plusPoint:', plusPoint); // 입력값 확인
    console.log('ID:', ID);

    try {
      const response = await axios.post('https://codingapple1.github.io/shop/data2.json', {
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

  const sortedData = [...tableData].sort(
    (a, b) => parseInt(b.points.replace(/,/g, ''), 10) - parseInt(a.points.replace(/,/g, ''), 10)
  );
  const top3 = sortedData.slice(0, 3);

  const [sortOption, setSortOption] = useState('id');
  const sortData = (data) => {
    let sortedData = [...data];
    switch (sortOption) {
      case 'id':
        return sortedData.sort((a, b) => a.id - b.id);
      case 'name':
        return sortedData.sort((a, b) => a.name.localeCompare(b.name));
      case 'points':
        return sortedData.sort((a, b) => parseInt(b.points.replace(/,/g, '')) - parseInt(a.points.replace(/,/g, '')));
      default:
        return sortedData;
    }
  };
  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked) {
      setID([...ID, id]);
    } else {
      setID(ID.filter((studentId) => studentId !== id));
    }
  };

  const ITEMS_PER_PAGE = 6; // 2. 페이지 당 몇 개의 아이템을 표시할 것인지 정하는 상수를 추가합니다.
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  // 3. 페이지네이션 버튼을 누르면 현재 페이지를 업데이트하는 함수를 추가합니다.
  const gotoPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // 4. 현재 페이지에 따라 아이템 목록을 나누는 로직을 추가합니다.
  const sortedItems = sortData(tableData);
  const currentItems = sortedItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className={styles.containerAdmin}>
      <NavBar />
      <SideBar />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className={`ml290 `}>
          <div className={`${styles.main} mgr24 `}>
            <AdminChart />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <label htmlFor="sort">정렬 : </label>
              <select
                className={`${styles.sortBox} ml20`}
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="id">ID</option>
                <option value="name">이름</option>
                <option value="points">포인트가 높은 순</option>
              </select>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>&nbsp;&nbsp;선택</th>
                  <th>ID</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>포인트</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((row) => (
                  <tr key={row.id}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                        className="checkbox ml20"
                      />
                    </th>
                    <td className={styles.fadedText}>{row.id}</td>
                    <td className={styles.fadedText}>{row.name}</td>
                    <td className={styles.fadedText}>{row.email}</td>
                    <td className={styles.fadedText}>{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 5. 페이지네이션 컴포넌트를 렌더링하는 로직을 추가합니다. */}
            <div className={`${styles.pagination} mt40`}>
              <button onClick={prevPage} disabled={currentPage <= 1}>
                이전
              </button>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => gotoPage(idx + 1)}
                  className={`${currentPage === idx + 1 ? styles.activePage : ''}`}
                >
                  {idx + 1}
                </button>
              ))}
              <button onClick={nextPage} disabled={currentPage >= totalPages}>
                다음
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.pointBox}`}>
          <div className={`${styles.box}`}>
            <b>포인트 초기화</b>
            <p>
              <button
                type="button"
                class="btn btn-primary btn-lg mt15 ml24"
                onClick={handleOpenDialog}
                style={{ borderRadius: '20px' }}
              >
                일괄 초기화
              </button>
            </p>
          </div>

          <div className={`${styles.box}`}>
            <b>포인트 주기</b>
            <div className="mb20">
              <form className={styles.form} onSubmit={handleSubmit}>
                <span className="ft20 mt15 fw500 mb5" style={{ display: 'block' }}>
                  지급 금액{' '}
                </span>
                <input
                  className={`${styles.inputbox} mgr10`}
                  type="text"
                  name="plusPoint"
                  value={plusPoint}
                  onChange={(e) => setPlusPoint(e.target.value)} // 입력값 변화에 따라 plusPoint 상태 업데이트
                />

                <button type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: '20px' }}>
                  일괄 지급
                </button>
              </form>
            </div>
          </div>

          {/* 포인트 초기화  */}
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

          <div className={`${styles.rankBox}`}>
            <b>이달의 랭킹</b>
            {top3.map((student, index) => (
              <div key={student.id} className={`${styles.rankDetail}`}>
                <div className={`${styles.ranking} ml30`}>{index + 1}등</div>
                <div className={`${styles.rankname} mgr20`}> {student.name}</div>
                <div className={`${styles.rankscore} mgr20`}>{student.points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
