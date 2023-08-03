/* eslint-disable */
import CardMenu from '../../component/Card.js';
import '../../style/css/App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Maindata from './MainData.js';
import person from '../../image/Main/Person.png';
import coin from '../../image/Main/Coin.png';

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

  return (
    <div className="container mainbox">
      <div className="rowbox" style={{ height: '138px' }}>
        <MenuBtn bg="white" boxShadow="2px 3px 4px 1px black;" width="238px" height="118px">
          <p style={{}}>
            <b className="title">{Maindata[0].username}님은</b>
            <span>
              <img src={coin} style={{ position: 'relative', display: 'inline-block', marginLeft: '10px' }} />
              <b>{Maindata[0].price}</b>
              <br /> 가지고 있어요
            </span>
            <img src={person} />
          </p>
        </MenuBtn>
        <MenuBtn bg="#FFDF8E" width="95px" height="118px">
          <p>
            <b className="title">QR</b>
          </p>
        </MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="#FFEDCB">
          <b className="title">오늘의 단어</b>
          <br />
          <span>
            매일 한 개씩
            <br />
            풀어봐요
          </span>
        </MenuBtn>
        <MenuBtn bg="#70C3FF">
          <p>
            <b>뉴스</b>
            <br />
            <span>
              경제 뉴스를 읽고
              <br />
              {Maindata[1].news}
            </span>
          </p>
        </MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="#1E90FF">
          <p>
            <b>1등 {Maindata[2].username}</b>
            <br />
            <span>{Maindata[2].asset}</span>
            <br />
            <b>2등 {Maindata[3].username}</b>
            <br />
            <span>{Maindata[3].asset}</span>
            <br />
            <b>3등 {Maindata[4].username} </b>
            <br />
            <span>{Maindata[4].asset}</span>
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
