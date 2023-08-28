import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";
import instance from "../oauth/instance";
import axios from "axios";

const SavingsName = styled.h5`
  font-size: 15px;
  color: #0e0e0e;
`;

const InfoContainer = styled.div`
  text-align: left;
  margin-left: 25px;
`;

const TotalPoints = styled.h3`
  font-size: 22px;
  text-align: left;
  font-weight: bold;
`;

const PointsInfo = styled.span`
  display: inline-block;
  font-size: 18px;
  margin-top: 15px;
  border: 1px solid #0e0e0e;
  border-radius: 15px;
  padding: 3px 15px;
`;

const JoinContainer = styled.div`
  margin-top: 30px;
  height: 270px;
  width: 374px;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid #0e0e0e;
  box-shadow: -2px -3px 4px -1px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

// const LabelContainer = styled.div`
//     margin: 10px 10% 0 10%;
//     display: flex;
//     justify-content: space-between;
// `;

const GaugeLabel = styled.span`
  display: block;
  font-size: 16px;
  color: #0e0e0e;
  font-weight: normal;
  text-align: left;
`;

// const MoneyGauge = styled.input`
//     -webkit-appearance: none;
//     outline: none;
//     width: 80%;
//     height: 10px;
//     background-color: #70C3FF;
//     border-radius: 10px;
//     margin-bottom: 30px;

//     &:focus {
//         outline: none;
//     }

//     ${props => props.sliderThumb && css`
//         &::-webkit-slider-thumb {
//         -webkit-appearance: none;
//         width: 20px;
//         height: 20px;
//         background: #fff;
//         border-radius: 20px;
//         box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
//         cursor: pointer;
//         }
//     `}
// `;

// const DurationGauge = styled.input`
//     -webkit-appearance: none;
//     outline: none;
//     width: 80%;
//     height: 10px;
//     background-color: #70C3FF;
//     border-radius: 10px;
//     margin-bottom: 30px;

//     &:focus {
//         outline: none;
//     }

//     ${props => props.sliderThumb && css`
//         &::-webkit-slider-thumb {
//         -webkit-appearance: none;
//         width: 20px;
//         height: 20px;
//         background: #fff;
//         border-radius: 20px;
//         box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
//         cursor: pointer;
//         }
//     `}
// `;

const JoinButton = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  border-radius: 15px;
  background-color: #70c3ff;
  opacity: 0.8;
  font-weight: bold;
  margin-left: 30%;

  &:hover {
    background-color: #1e90ff;
    opacity: 0.8;
  }
`;

const DetailInfo = styled.div`
  height: 40px;
  border-bottom: 1px solid #0e0e0e;
  padding-left: 20px;
  text-align: left;
  line-height: 35px;
`;

const DetailLink = styled.a`
  text-decoration: none;
  color: #0e0e0e;
  font-size: 16px;
  font-weight: normal;
`;
const InputForm = styled.form`
  text-align: left;
`;

const InputBox = styled.input`
  border: 3px solid rgba(112, 195, 255, 0.5);
  border-radius: 15px;
  width: 100px;
  height: 45px;
  margin: 5px 5px 15px 5px;

  &:focus {
    -webkit-appearance: none;
    outline: none;
    border-color: #70c3ff;
  }
`;

const InstallmentSavingsJoin = () => {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  // const [moneyValue, setmoneyValue] = useState(100);
  // const [durationValue, setDurationValue] = useState(4);

  // 예금 가입 폼 데이터
  const [formData, setFormData] = useState({
    increase_money: 100,
    week: 4,
    depositId: 1,
  });

  // 폼 전송
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/game/deposit",
        formData
      );
      console.log(formData);
      if (response.status === 200) {
        console.log("폼 데이터가 성공적으로 전송되었습니다.");
      } else {
        console.error("폼 데이터 전송 실패");
      }
    } catch (error) {
      console.error("에러:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleMoneyInput = event => {
  //     if (event.target.value !== moneyValue) {
  //         setmoneyValue(event.target.value);
  //     }
  // };

  // const handleDurationInput = e => {
  //     if (e.target.value !== durationValue) {
  //         setDurationValue(e.target.value);
  //     }
  // };

  const [searchParams] = useSearchParams();
  const index = searchParams.get("index");

  const [savingsInfo, setSavingsInfo] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/savings/join?index=${index}`)
      .then((response) => {
        // console.log(response.data)
        setSavingsInfo(response.data);
      });
  }, [index]);

  if (!savingsInfo) {
    return <div>Loading...</div>;
  }

  const totalMoney = new Intl.NumberFormat("en-US").format(
    formData.increase_money * 10000
  );
  const calRate = (0.5 + (formData.week - 4) * 0.1).toFixed(1);
  const totalInterest = new Intl.NumberFormat("en-US").format(
    Math.floor(calRate * 0.01 * formData.increase_money * 10000)
  );

  const day = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = day.toLocaleDateString("ko-KR", options);

  const expiredDate = new Date(day);
  expiredDate.setDate(day.getDate() + 7 * formData.week);
  const expDate = expiredDate.toLocaleDateString("ko-KR", options);

  return (
    <div>
      <InfoContainer>
        <SavingsName>{savingsInfo.depositName}</SavingsName>
        <TotalPoints>
          이렇게 모으면
          <br /> 이자 {totalInterest} 포인트
        </TotalPoints>
        <PointsInfo> 원금 {totalMoney} 포인트 </PointsInfo>
        <br />
        <PointsInfo> 이율 {calRate}% </PointsInfo> <br />
        <PointsInfo> 만기일 : {expDate}</PointsInfo>
      </InfoContainer>
      <JoinContainer>
        {/* <TotalPoints>{moneyValue} 포인트를</TotalPoints> */}
        {/* <LabelContainer> */}
        {/* <GaugeLabel>{minMoneyValue}포인트</GaugeLabel>
                    <GaugeLabel>{maxMoneyValue}포인트</GaugeLabel> */}
        {/* <GaugeLabel>{savingsInfo.minAmount}포인트</GaugeLabel>
                    <GaugeLabel>{savingsInfo.maxAmount}포인트</GaugeLabel> */}
        {/* </LabelContainer> */}
        {/* <MoneyGauge type="range" min={savingsInfo.minAmount} max={savingsInfo.maxAmount} step="10000" sliderThumb value={moneyValue} onChange={handleMoneySlider}></MoneyGauge> */}

        <InputForm onSubmit={handleSubmit}>
          <GaugeLabel>
            {savingsInfo.minAmount / 10000}~{savingsInfo.maxAmount / 10000}{" "}
            사이의 값을 입력해주세요
          </GaugeLabel>
          <InputBox
            type="number"
            name="increase_money"
            value={formData.increase_money}
            onChange={handleInputChange}
          />
          만 포인트를 <br />
          <GaugeLabel>
            {savingsInfo.minMonth}~{savingsInfo.maxMonth} 사이의 값을
            입력해주세요
          </GaugeLabel>
          <InputBox
            type="number"
            name="week"
            value={formData.week}
            onChange={handleInputChange}
          />
          주 동안 예금하기
          <JoinButton type="submit">가입하기</JoinButton>
          <input
            type="hidden"
            name="depositId"
            value={formData.depositId}
          ></input>
        </InputForm>
      </JoinContainer>
      <DetailInfo>
        <DetailLink href="/savings/notice">상품 안내</DetailLink>
      </DetailInfo>
      <DetailInfo>
        <DetailLink href="/savings/rate">금리 정보</DetailLink>
      </DetailInfo>
    </div>
  );
};

export default InstallmentSavingsJoin;
