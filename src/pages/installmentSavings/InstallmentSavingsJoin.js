import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SavingsName = styled.h5`
    font-size: 15px;
    color: #0E0E0E;
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
    border: 1px solid #0E0E0E;
    border-radius: 15px;
    padding: 3px 15px;
`;

const JoinContainer = styled.div`
    margin-top: 50px;
    height: 300px;
    width: 374px;
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid #0E0E0E;
    box-shadow: -2px -3px 4px -1px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const LabelContainer = styled.div`
    margin: 10px 10% 0 10%;
    display: flex;
    justify-content: space-between;
`;

const GaugeLabel = styled.span`
    font-size: 16px;
    color: #0E0E0E;
    font-weight: normal;
`

const MoneyGauge = styled.input`
    -webkit-appearance: none;
    outline: none;
    width: 80%;
    height: 10px;
    background-color: #70C3FF;
    border-radius: 10px;
    margin-bottom: 30px;

    &:focus {
        outline: none;
    }

    ${props => props.sliderThumb && css`
        &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
        cursor: pointer;
        }
    `}
`;

const DurationGauge = styled.input`
    -webkit-appearance: none;
    outline: none;
    width: 80%;
    height: 10px;
    background-color: #70C3FF;
    border-radius: 10px;
    margin-bottom: 30px;

    &:focus {
        outline: none;
    }

    ${props => props.sliderThumb && css`
        &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
        cursor: pointer;
        }
    `}
`;

const JoinButton = styled.button`
    width: 130px;
    height: 40px;
    border: none;
    border-radius: 15px;
    background-color: #70C3FF;
    opacity: 0.8;
    font-weight: bold;

    &:hover {
        background-color: #1E90FF;
        opacity: 0.8;
    }
`;

const DetailInfo = styled.div`
    height: 40px;
    border-bottom: 1px solid #0E0E0E;
    padding-left: 20px;
    text-align: left;
    line-height: 35px;
`;

const DetailLink = styled.a`
    text-decoration: none;
    color: #0E0E0E;
    font-size: 16px;
    font-weight: normal;
`;

const InstallmentSavingsJoin = () => {
    const [moneyValue, setmoneyValue] = useState(1);
    const [durationValue, setDurationValue] = useState(1);

    const handleMoneySlider = event => {
        setmoneyValue(event.target.value);
    };

    const handleDurationSlider = e => {
        setDurationValue(e.target.value);
    }; 

    const rate = 3.5;
    const totalMoney = new Intl.NumberFormat('en-US').format(moneyValue * 10000 * durationValue);
    const totalInterest = new Intl.NumberFormat('en-US').format(Math.floor(rate / 100 * (parseInt(durationValue)+1) / 24 * moneyValue * 10000 * durationValue));
    const minMoneyValue = 0;
    const maxMoneyValue = 100;
    const minDurationValue = 3;
    const maxDurationValue = 36;

    return (
        <div>
            <InfoContainer>
                <SavingsName>짱구 자유적금</SavingsName>
                <TotalPoints>이렇게 모으면<br /> 이자 { totalInterest } 포인트</TotalPoints>
                <PointsInfo> 원금 {totalMoney} 포인트 </PointsInfo><br />
                <PointsInfo> 연 {rate}% </PointsInfo>
            </InfoContainer>
            <JoinContainer>
                <TotalPoints>한 달에 {moneyValue}만 포인트</TotalPoints>
                <LabelContainer>
                    <GaugeLabel>{minMoneyValue}포인트</GaugeLabel>
                    <GaugeLabel>{maxMoneyValue}포인트</GaugeLabel>
                </LabelContainer>
                <MoneyGauge type="range" min={minMoneyValue} max={maxMoneyValue} step="5" sliderThumb value={moneyValue} onChange={handleMoneySlider}></MoneyGauge>
                <TotalPoints>{durationValue}개월 모으기</TotalPoints>
                <LabelContainer>
                    <GaugeLabel>{minDurationValue}개월</GaugeLabel>
                    <GaugeLabel>{maxDurationValue}개월</GaugeLabel>
                </LabelContainer>
                <DurationGauge type="range" min={minDurationValue} max={maxDurationValue} step="1" sliderThumb value={durationValue} onChange={handleDurationSlider}></DurationGauge>
                <JoinButton>가입하기</JoinButton>
            </JoinContainer>
            <DetailInfo>
                <DetailLink href="#">상품 안내</DetailLink>
            </DetailInfo>
            <DetailInfo>
                <DetailLink href="#">금리 정보</DetailLink>
            </DetailInfo>
        </div>
    );
};

export default InstallmentSavingsJoin;