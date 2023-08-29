/* eslint-disable */
import React, { useState, useEffect } from "react";
// import axios from 'axios';
import styled from "styled-components";
import Hand from "../../image/Savings/hand.png";
import Savings from "../../component/Savings";
import instance from "../oauth/instance";
import axios from "axios";

const SavingMainContainer = styled.div`
  margin-top: 30px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 25px;
  margin-bottom: 10px;
  letter-spacing: -0.32px;
`;

const ExpiredContent = styled.div`
  width: 330px;
  height: 165px;
  background-color: rgba(112, 195, 255, 0.5);
  border-radius: 15px 15px 15px 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  padding: 20px;
  position: relative;
`;

const ExpiredNotice = styled.h5`
  font-size: 18px;
  text-align: left;
`;

const ExpiredText = styled.div`
  display: inline-block;
  width: 120px;
  text-align: left;
  font-size: 15px;
  font-weight: normal;
  margin-top: 10px;
`;

const HandImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const InstallmentSavings = () => {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  const [savingsList, setSavingsList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/game/deposit").then((response) => {
      // console.log(response.data)
      setSavingsList(response.data);
    });
  }, []);

  const [mySavings, setMySavings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/mypage/deposit").then((response) => {
      // console.log(response.data);
      setMySavings(response.data);
    });
  }, []);

  return (
    <SavingMainContainer>
      <Title>곧 끝나는 예금</Title>
      {mySavings.length > 0 ? (
        <ExpiredContent>
          <ExpiredNotice>
            <b>{mySavings[0].myDepositDto.depositType.depositName}</b>이 <br />{" "}
            <b>{mySavings[0].myDepositDto.endDate}</b>에 만기 되어요
          </ExpiredNotice>
        <ExpiredText>
          원금 포인트
          <br />
          이자
          <br />
          받을 총 포인트
        </ExpiredText>
        <ExpiredText>
          {mySavings[0].myDepositDto.depositAmount * 10000}
          <br />
          {mySavings[0].myDepositDto.interestAmount}
          <br />
          {mySavings[0].myDepositDto.depositAmount * 10000 + mySavings[0].myDepositDto.interestAmount}
        </ExpiredText>
        <HandImage src={Hand}></HandImage>
      </ExpiredContent>
    ) : (
      <ExpiredContent>
        <ExpiredNotice><b>가입한 예금 상품이 없습니다.</b></ExpiredNotice>
      </ExpiredContent>
  )}

      <Title>예금 상품들을 구경해보세요</Title>
      {savingsList.map((sv) => {
        return (
          <Savings
            key={sv.depositTypeId}
            savings_name={sv.depositName}
            savings_rate="2.1"
            savings_minMonth={sv.minMonth}
            savings_maxMonth={sv.maxMonth}
            savings_id={sv.depositTypeId}
          />
        );
      })}
    </SavingMainContainer>
  );
};

export default InstallmentSavings;
