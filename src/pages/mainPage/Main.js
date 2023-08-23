/* eslint-disable */
import React, { useState, useEffect } from 'react';
import CardMenu from '../../component/Card.js';
import '../../style/css/App.css';
import styled from 'styled-components';
import Maindata from './MainData.js';
import person from '../../image/Main/Person.png';
import coin from '../../image/Main/Coin.png';
import Calender from '../../image/Main/Calender.png';
import Dog from '../../image/Main/Dog.png';
import Globe from '../../image/Main/Globe.png';
import Money from '../../image/Main/Money.png';
import QR from '../../image/Main/QrCode.png';
import Footer from '../../component/Footer.js';
import axios from 'axios';

let MenuBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
  width: ${(props) => props.width || '168px'};
  height: ${(props) => props.height || '164px'};
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

function Main() {
  const [user, setUser] = useState(Maindata);
  const [username, setUsername] = useState('');

  // useEffect(() => {
  //   // 토큰을 이용하여 사용자 이름을 가져옵니다
  //   const fetchUsername = async () => {
  //     try {
  //       const response = await axios.post('http://localhost:8080/decodeToken', { tokenOnly });
  //       setUsername(response.data.username);
  //     } catch (error) {
  //       console.error(error);
  //       console.log(tokenOnly);
  //     }
  //   };
  //   const authToken = localStorage.getItem('Authorization');
  //   const tokenOnly = authToken.split(" ")[1];
  //   if (tokenOnly) {
  //     fetchUsername();
  //   }
  // }, []);

  return (
    <div className="main mt50">
      <div className="rowbox" style={{ height: '138px' }}>
        <a href="/mypage" style={{ textDecoration: 'none' }}>
          <MenuBtn bg="white" boxShadow="2px 3px 4px 1px rgba(0, 0, 0, 0.25);" width="238px" height="118px">
            <p style={{}}>
              <b className="title">{username ? `${username}님은` : ''}</b>
              <span>
                <img src={coin} style={{ position: 'relative', display: 'inline-block', marginLeft: '10px' }} />
                <b>{Maindata[0].price}</b>
                <br /> 가지고 있어요
              </span>
              <img src={person} className="imgMain" />
            </p>
          </MenuBtn>
        </a>

        <a href="/QR" style={{ textDecoration: 'none' }}>
          <MenuBtn bg="rgba(255, 223, 142, 0.5);" width="95px" height="118px">
            <p>
              <b className="title">QR</b>
              <img src={QR} className="qr imgMain" />
            </p>
          </MenuBtn>
        </a>
      </div>
      <div className="rowbox">
        <a href="/QR" style={{ textDecoration: 'none' }}>
          <MenuBtn bg="rgba(255, 237, 203, 0.5);">
            <b className="title mt10 mb10">오늘의 단어</b>
            <span>
              매일 한 개씩
              <br />
              풀어봐요
            </span>
            <img src={Calender} className="imgMain" />
          </MenuBtn>
        </a>
        <a href="/news" style={{ textDecoration: 'none' }}>
          <MenuBtn bg="rgba(112, 195, 255, 0.5);">
            <div>
              <b className="title mt10 mb10">뉴스</b>
              <span>조금씩 알아보아요</span>
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
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '142px',
                marginBottom: '7px',
                fontSize: '12px',
              }}
            >
              <b>2등 {Maindata[3].username}</b>
              <span>{Maindata[3].asset}</span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '142px',
                marginBottom: '7px',
                fontSize: '12px',
              }}
            >
              <b>3등 {Maindata[4].username} </b>
              <span>{Maindata[4].asset}</span>
            </div>
          </div>
        </MenuBtn>
        <a href="/stock" style={{ textDecoration: 'none' }}>
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
        style={{ marginLeft: '12px' }}
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
