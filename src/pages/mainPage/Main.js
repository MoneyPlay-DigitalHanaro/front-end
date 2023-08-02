/* eslint-disable */
import CardMenu from '../../component/Card.js';
import '../../style/css/App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Maindata from './MainData.js';

let MenuBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
  width: ${(props) => props.width || '168px'};
  height: ${(props) => props.height || '164px'};
  border: solid white 0px;
  border-radius: 15px;
  box-shadow: ${(props) => props.boxShadow};
`;

function Main() {
  return (
    <div className="container mainbox">
      <div className="rowbox" style={{ height: '138px' }}>
        <MenuBtn bg="white" boxShadow="2px 3px 4px 1px black;" width="238px" height="118px">
          <p>
            <b>서예진님은</b>
            <br />
            <span>5,000,000</span>
            <br />
            <span>가지고 있어요</span>
          </p>
        </MenuBtn>
        <MenuBtn bg="#FFDF8E" width="95px" height="118px">
          <p>
            <b>QR</b>
          </p>
        </MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="#FFEDCB">
          <p>
            <b>오늘의 단어</b>
            <br />
            <span>
              매일 한 개씩
              <br />
              풀어봐요
            </span>
          </p>
        </MenuBtn>
        <MenuBtn bg="#70C3FF">
          <p>
            <b>뉴스</b>
            <br />
            <span>
              경제 뉴스를 읽고
              <br />
              어쩌구구
            </span>
          </p>
        </MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="#1E90FF">
          <p>
            <b>1등 서예진</b>
            <br />
            <span>20,000,000</span>
            <br />
            <b>2등 </b>
            <span>김익환 15,000,000</span>
            <br />
            <b>3등 </b>
            <span>박민재 15,000,000</span>
          </p>
        </MenuBtn>
        <MenuBtn bg="#FFE070">
          <p>
            <b>자산 불리기</b>
            <br />
            <span>
              적금과 주식을
              <br />
              체험할 수 있어요
            </span>
          </p>
        </MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="white" boxShadow="2px 3px 4px 1px black;" width="348px" height="97px">
          <p>
            <b>공지사항</b>
            <br />
            <span>금리, 상품 정보, 패치내용</span>
          </p>
        </MenuBtn>
      </div>
    </div>
  );
}

export default Main;
