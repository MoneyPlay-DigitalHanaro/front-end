/* eslint-disable */
import React, { useState, useEffect } from "react";
import NavBar from "../../component/Navbar.js";
import SideBar from "../../component/Sidebar.js";
import styles from "../../style/css/Admin.module.css";
import axios from "axios";
import AdminDetailChart from "../../component/AdminDetailChart.js";

function AdminStudent() {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  const [plusPoint, setPlusPoint] = useState(""); // useState를 사용하여 plusPoint 상태 설정
  const [ID, setID] = useState([]);
  const ITEMS_PER_PAGE = 15; // 2. 페이지 당 몇 개의 아이템을 표시할 것인지 정하는 상수를 추가합니다.
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
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
  // 데이터 수정하기버튼 눌렀을시
  const [editableData, setEditableData] = useState(tableData); // 기존 tableData를 수정가능한 상태로 만듭니다.
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    // 서버에 변경된 데이터를 전송하거나 필요한 작업을 수행하실 수 있습니다.
    updateRowData();
  };

  // 수정된 데이터를 서버에 보내는 함수
  const updateRowData = async () => {
    try {
      await axios.put(
        `https://sss.naver.com/updateStudent/${editedRow.id}`,
        editedRow
      );
      alert("데이터가 성공적으로 수정되었습니다.");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("데이터 수정 중 오류가 발생했습니다.");
    }
  };

  // 페이지네이션 부분

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

  // 4. 테이블데이터 정렬

  const sortedData = [...tableData].sort(
    (a, b) =>
      parseInt(
        typeof b.points === "string" ? b.points.replace(/,/g, "") : b.points,
        10
      ) -
      parseInt(
        typeof a.points === "string" ? a.points.replace(/,/g, "") : a.points,
        10
      )
  );
  const top3 = sortedData.slice(0, 3);

  const [sortOption, setSortOption] = useState("id");
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
            parseInt(b.points.replace(/,/g, "")) -
            parseInt(a.points.replace(/,/g, ""))
        );
      default:
        return sortedData;
    }
  };

  // 각 행에 커서 올려놓았을시 이벤트 + 수정하기버튼
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRow, setEditedRow] = useState(null);

  function handleEditChange(event, field) {
    setSelectedRow({ ...SelectedRow, [field]: event.target.value });
  }

  // 오른쪽에 세부정보 뜨는 내용 박스
  function DetailsPane({ data }) {
    if (!data) return <div>선택된 항목이 없습니다.</div>;

    return (
      <div>
        <div className={`${styles.detailTitle} mb50`}>학생 세부 정보</div>
        <div className={`${styles.studentDetail}`}>
          <>
            <p>ID: {data.userId}</p>
            <p>이름: {data.studentName}</p>
            <p>이메일: {data.email}</p>
            <p>포인트: {data.totalHoldingPoint}</p>
            <p>금액변동상황 : {data.totalChangeStockRate}</p>
            <p></p>
          </>
        </div>
      </div>
    );
  }

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
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>포인트</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((row) => (
                  <tr
                    key={row.id}
                    className={styles.rowHover}
                    onClick={() => setSelectedRow(row)}
                  >
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
        <div className={`${styles.detailBox}`}>
          {selectedRow && <DetailsPane data={selectedRow} />}
          {selectedRow && <AdminDetailChart data={selectedRow} />}
        </div>
      </div>
    </div>
  );
}

export default AdminStudent;
