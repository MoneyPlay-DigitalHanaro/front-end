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
          흰색 버튼
        </MenuBtn>
        <MenuBtn bg="#FFDF8E" width="95px" height="118px">
          흰색 버튼
        </MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="#FFEDCB">흰색 버튼</MenuBtn>
        <MenuBtn bg="#70C3FF">흰색 버튼</MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="#1E90FF">흰색 버튼</MenuBtn>
        <MenuBtn bg="#FFE070">흰색 버튼</MenuBtn>
      </div>
      <div className="rowbox">
        <MenuBtn bg="white" boxShadow="2px 3px 4px 1px black;" width="348px" height="97px">
          흰색 버튼
        </MenuBtn>
      </div>
    </div>
  );
}

export default Main;
