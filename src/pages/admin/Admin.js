/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기
import NavBar from "../../component/Navbar.js";
import SideBar from "../../component/Sidebar.js";
import styles from "../../style/css/Admin.module.css";
import axios from "axios";
import AdminChart from "../../component/AdminChart.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Admin() {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  const [plusPoint, setPlusPoint] = useState(""); // useState를 사용하여 plusPoint 상태 설정
  const [ID, setID] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [data, setData] = useState(null);

  const ITEMS_PER_PAGE = 6; // 2. 페이지 당 몇 개의 아이템을 표시할 것인지 정하는 상수를 추가합니다.
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  let [sortOption, setSortOption] = useState("id");
  useEffect(() => {
    // API에서 데이터를 가져와서 tableData 상태를 설정하는 함수
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/admin");
        setTableData(response.data.user); // "user" 키를 기반으로 데이터를 설정
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // 함수 호출하여 실행
  }, []);
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 중지

    try {
      const response = await axios.post(
        "http://localhost:8080/admin/total_increase",
        null, // 요청 바디에 데이터 없음
        {
          params: {
            increase_point: plusPoint, // increase_point를 요청 파라미터로 전달
          },
        }
      );

      console.log(response.data); // 서버로부터의 응답을 확인
      // 필요한 추가 로직을 여기에 추가하세요.
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // <<<<<<< 포인트 초기화 <<<<<<<<<
  const resetPoints = () => {
    const updatedData = tableData.map((item) => ({
      ...item,
      points: 0,
    }));
    setTableData(updatedData);
  };

  const handleInitPoints = async () => {
    try {
      resetPoints(); // 포인트 초기화
      handleCloseDialog(); // 다이얼로그 닫기

      const response = await axios.post(
        "http://localhost:8080/admin/total_init"
      );
      console.log(response.data); // 서버로부터의 응답을 확인
    } catch (error) {
      console.error("Error initializing points:", error);
    }
  };

  const handleOpenDialog = () => {
    setShowConfirmDialog(true);
  };

  const handleCloseDialog = () => {
    setShowConfirmDialog(false);
  };

  // <<<<<<<< 데이터 정렬 <<<<<<<<<<
  const sortedData = [...tableData].sort(
    (a, b) =>
      parseInt(
        typeof b.totalHoldingPoint === "string" ? b.totalHoldingPoint.replace(/,/g, "") : b.totalHoldingPoint,
        10
      ) -
      parseInt(
        typeof a.totalHoldingPoint === "string" ? a.totalHoldingPoint.replace(/,/g, "") : a.totalHoldingPoint,
        10
      )
  );

  // 0이 된 데이터 서버에 보내기
  const postData = async () => {
    const postData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/admin/total_init"
        );
        console.log(response.data); // 서버로부터의 응답을 확인
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };
    try {
      const response = await axios.post("YOUR_API_ENDPOINT_HERE", updatedData);
      console.log(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  // 랭킹 맥이기
  
  const sortData = (data) => {
    let sortedData = [...data];
    switch (sortOption) {
      case "id":
        return sortedData.sort((a, b) => a.id - b.id);
      case "name":
        return sortedData.sort((a, b) => a.name.localeCompare(b.name));
      case "points":
        return sortedData.sort(
          (a, b) =>
            parseInt(b.totalHoldingPoint.replace(/,/g, "")) -
            parseInt(a.totalHoldingPoint.replace(/,/g, ""))
        );
      default:
        return sortedData;
    }
  };

  const top3 = sortedData.slice(0, 3);
  console.log(top3);

  // ID 찾기
  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked) {
      setID([...ID, id]);
    } else {
      setID(ID.filter((studentId) => studentId !== id));
    }
  };

  // 4. 현재 페이지에 따라 아이템 목록을 나누는 로직을 추가합니다.
  const sortedItems = sortData(tableData);
  const currentItems = sortedItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.containerAdmin}>
      <NavBar />
      <SideBar />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={`ml290 `}>
          <div className={`${styles.main} mgr24 `}>
            <AdminChart data={data} />
            {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
            </div> */}
            <table className="table">
              <thead>
                <tr>
                  <th>&nbsp;&nbsp;선택</th>
                  <th>ID</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>누적 포인트</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((row) => (
                  <tr key={row.id}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        onChange={(e) =>
                          handleCheckboxChange(row.id, e.target.checked)
                        }
                        className="checkbox ml20"
                      />
                    </th>
                    <td className={styles.fadedText}>{row.userId}</td>
                    <td className={styles.fadedText}>{row.studentName}</td>
                    <td className={styles.fadedText}>{row.email}</td>
                    <td className={styles.fadedText}>
                      {row.totalHoldingPoint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 5. 페이지네이션 컴포넌트를 렌더링하는 로직을 추가 */}
            <div className={`${styles.pagination} mt40`}>
              <button onClick={prevPage} disabled={currentPage <= 1}>
                이전
              </button>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => gotoPage(idx + 1)}
                  className={`${
                    currentPage === idx + 1 ? styles.activePage : ""
                  }`}
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
                style={{ borderRadius: "20px" }}
              >
                일괄 초기화
              </button>
            </p>
          </div>

          <div className={`${styles.box}`}>
            <b>포인트 주기</b>
            <div className="mb20">
              <form className={styles.form} onSubmit={handleSubmit}>
                <span
                  className="ft20 mt15 fw500 mb5"
                  style={{ display: "block" }}
                >
                  지급 금액{" "}
                </span>
                <input
                  className={`${styles.inputbox} mgr10`}
                  type="text"
                  name="plusPoint"
                  value={plusPoint}
                  onChange={(e) => setPlusPoint(e.target.value)} // 입력값 변화에 따라 plusPoint 상태 업데이트
                />

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ borderRadius: "20px" }}
                >
                  일괄 지급
                </button>
              </form>
            </div>
          </div>

          {/* 포인트 초기화  */}
          {showConfirmDialog && (
            <div className="confirm-modal">
              <p>정말로 포인트를 초기화하겠습니까?</p>
              <Button
                variant="primary"
                onClick={() => {
                  resetPoints();
                  postData();
                  // 초기화 로직
                  console.log("포인트 초기화됨");
                  handleCloseDialog();
                  handleInitPoints();
                }}
                style={{ fontSize: "20px", marginRight: "10px" }}
              >
                확인
              </Button>
              <Button
                onClick={handleCloseDialog}
                variant="light"
                style={{ fontSize: "20px" }}
              >
                취소
              </Button>
            </div>
          )}
          <div className={`${styles.rankBox}`}>
            <b>현재 랭킹</b>
            {top3.map((student, index) => (
              <div key={student.id} className={`${styles.rankDetail}`}>
                <div className={`${styles.ranking} ml30`}>{index + 1}등</div>
                <div className={`${styles.rankname} mgr20`}>
                  {student.studentName}
                </div>{" "}
                {/* studentName 으로 이름 표시 */}
                <div className={`${styles.rankscore} mgr20`}>
                  {student.totalHoldingPoint}
                </div>{" "}
                {/* totalHoldingPoint 으로 포인트 표시 */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
