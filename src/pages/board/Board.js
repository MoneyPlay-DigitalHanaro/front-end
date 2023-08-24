/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../style/css/Board.module.css";
import Send from "../../image/Board/send3.png";

const BoardPage = () => {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  const [boardData, setBoardData] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetchBoardData();
  }, []);
  const fetchBoardData = async () => {
    try {
      const response = await axios.get("/board");
      setBoardData(response.data);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/board", { message });
      setMessage(""); // 작성 완료 후 메시지 초기화
      fetchBoardData(); // 글 작성 후 데이터 다시 가져오기
    } catch (error) {
      console.error("Error adding board:", error);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div style={{ fontSize: "25px" }}>서로 이야기 해요</div>
        <ul>
          {boardData.map((board) => (
            <li key={board.boardId}>
              <strong>{board.studentName}</strong>: {board.message}
            </li>
          ))}
        </ul>
        <div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${styles.textBox}`}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#edf5fb",
                border: "none",
                color: "none",
                borderRadius: "10px",
                height: "55px",
                marginBottom: "10px",
              }}
            >
              <img src={Send} className={`${styles.sendImg}`} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
