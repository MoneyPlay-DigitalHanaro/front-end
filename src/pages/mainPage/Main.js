/* eslint-disable */
import React, { useState, useEffect } from "react";
import CardMenu from "../../component/Card.js";
import "../../style/css/App.css";
import styled from "styled-components";
import Maindata from "./MainData.js";
import person from "../../image/Main/Person.png";
import coin from "../../image/Main/Coin.png";
import Calender from "../../image/Main/Calender.png";
import Dog from "../../image/Main/Dog.png";
import Globe from "../../image/Main/Globe.png";
import Money from "../../image/Main/Money.png";
import QR from "../../image/Main/QrCode.png";
import Footer from "../../component/Footer.js";
import axios from "axios";
import Logo from "../../image/Main/IecoLogo.png";
import LogoutButton from "../oauth/Logout.js";

let MenuBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
  width: ${(props) => props.width || "168px"};
  height: ${(props) => props.height || "164px"};
  border: solid white 0px;
  border-radius: 15px;
  box-shadow: ${(props) => props.boxShadow};
  position: relative;
  text-align: left;
  padding-left: 15px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const LogoBox = styled.div`
  text-align: left;
  padding: 10px 15px;
`;

function Main() {
  const [user, setUser] = useState(Maindata);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  const [itemsWithIndex0, setItemsWithIndex0] = useState([]);
  const [itemsWithIndex1, setItemsWithIndex1] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/main/")
      .then((response) => {
        // API 응답에서 데이터 필터링
        const filteredItems0 = response.data.filter((item) => item.index === 0);
        const filteredItems1 = response.data.filter((item) => item.index === 1);

        // 필터링 된 데이터를 상태에 저장
        setItemsWithIndex0(filteredItems0);
        setItemsWithIndex1(filteredItems1);
      })
      .catch((error) => {
        console.error("에러", error);
      });
  }, []);

  return (
    <div className="main">
      <LogoBox>
        <img src={Logo} />
      </LogoBox>
      <div className="rowbox" style={{ height: "138px" }}>
        <a href="/mypage" style={{ textDecoration: "none" }}>
          <MenuBtn
            bg="white"
            boxShadow="2px 3px 4px 1px rgba(0, 0, 0, 0.25);"
            width="348px"
            height="118px"
          >
            <p style={{ marginTop: "15px", marginLeft: "3px" }}>
              {itemsWithIndex1.map((item) => (
                <>
                  <b className="title">{item.name ? `${item.name}님은` : ""}</b>
                  <span>
                    현재 <b>{item.point} 포인트</b>를 <br />
                    가지고 있어요!
                  </span>
                  <br />
                </>
              ))}
              <img
                src={person}
                className="imgMain mgr15"
                style={{ width: "100px", height: "90px" }}
              />
            </p>
          </MenuBtn>
        </a>

        {/* <a href="/QR" style={{ textDecoration: "none" }}>
          <MenuBtn bg="rgba(255, 223, 142, 0.5);" width="95px" height="118px">
            <p>
              <b className="title">QR</b>
              <img src={QR} className="qr imgMain" />
            </p>
          </MenuBtn>
        </a> */}
      </div>
      <div className="rowbox">
        <a href="/wordQuiz" style={{ textDecoration: "none" }}>
          <MenuBtn bg="rgba(255, 237, 203, 0.5);">
            <b className="title mt10 mb10">오늘의 단어</b>
            <span>
              매일 3 개씩
              <br />
              공부해요
            </span>
            <img src={Calender} className="imgMain" />
          </MenuBtn>
        </a>
        <a href="/news" style={{ textDecoration: "none" }}>
          <MenuBtn bg="rgba(112, 195, 255, 0.5);">
            <div>
              <b className="title mt10 mb10">경제 뉴스</b>
              <span>재미있는 이야기로 배워요</span>
              <img src={Globe} className="imgMain" />
            </div>
          </MenuBtn>
        </a>
      </div>
      <div className="rowbox">
        <MenuBtn bg="rgba(30, 144, 255, 0.5)">
          <div>
            <b className="firstgrade mt15">1등 {Maindata[2].username}</b>
            <div className="mb15 ft14">
              <img src={coin} className="coin" />
              <span>{Maindata[2].asset}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "142px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              <b>2등 {Maindata[3].username}</b>
              <span>{Maindata[3].asset}</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "142px",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              <b>3등 {Maindata[4].username} </b>
              <span>{Maindata[4].asset}</span>
            </div>
          </div>
        </MenuBtn>
        <a href="/asset" style={{ textDecoration: "none" }}>
          <MenuBtn bg="rgba(255, 224, 112, 0.5)">
            <p>
              <b className="title mt10 mb10">자산 불리기</b>
              <span>
                적금과 주식을
                <br />
                체험할 수 있어요
              </span>
            </p>
            <img src={Money} className="imgMain" />
          </MenuBtn>
        </a>
      </div>
      <MenuBtn
        bg="white"
        boxShadow="2px 3px 4px 1px rgba(0,0,0, 0.25);"
        width="348px"
        height="97px"
        style={{ marginLeft: "12px" }}
      >
        <div>
          <img src={Dog} className="dog" />
          <div className="inline absolute mt15  ">
            <b className="title mb_3">공지사항</b>
            <span>금리, 상품 정보, 패치내용</span>
          </div>
        </div>
      </MenuBtn>
    </div>
  );
}

export default Main;
