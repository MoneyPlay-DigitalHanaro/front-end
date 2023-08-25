/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../../style/css/Board.module.css";
import Send from "../../image/Board/send3.png";
import userCircle from "../../image/Board/UserCircle.png";

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

  const chatRef = useRef(null); // 채팅창 기본설정

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  클릭한 시간 보내기 (DB 자료필요)
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    //
    try {
      await axios.post("/board", { message, time: formattedTime });
      setMessage(""); // 작성 완료 후 메시지 초기화

      const prevScrollHeight = chatRef.current.scrollHeight;

      fetchBoardData(); // 글 작성 후 데이터 다시 가져오기
      if (chatRef.current) {
        chatRef.current.scrollTop = prevScrollHeight + 60;
      }
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
          alignItems: "flex-start",
          flexWrap: "nowrap",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginTop: "-20px",
            marginBottom: "26px",
            width: "109px",
            height: "32px",
            border: "solid #1E90FF 2px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Tmoney",
            fontWeight: "600",
          }}
        >
          1학년 3반
        </div>

        <div className={`${styles.yourChat}`} ref={chatRef}>
          <ul>
            {boardData.map((board) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <img src={userCircle} />
                </div>
                <li
                  key={board.boardId}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: "13px",
                      fontWeight: 300,
                    }}
                  >
                    {board.studentName}
                  </div>
                  <div className={`${styles.chatBox}`}>{board.message}</div>
                </li>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    fontSize: "10px",
                    fontWeight: 300,
                    marginLeft: "3px",
                  }}
                >
                  {board.time}
                </div>
              </div>
            ))}
            <div style={{ height: "60px" }}></div> {/* 빈 공간 추가 */}
          </ul>
        </div>

        <div style={{ marginTop: "25px" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              alignContent: "flex-end",
              margintop: "10px",
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
                backgroundColor: "#FFE070",
                border: "none",
                color: "none",
                borderRadius: "10px",
                height: "45px",
                width: "56px",
                marginLeft: "5px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                전송
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
