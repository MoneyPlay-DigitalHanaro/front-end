import React from 'react';
import styled from 'styled-components';

const SavingsInfo = styled.div`
    display: grid;
    grid-template-columns: 80px 250px;
    text-align: left;
    margin-top: 20px;
`;

const Thumbnail = styled.div`
    display: inline-block;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 40px;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25);
    margin-left: 20px;
`;

const SavingsDetail = styled.div`
    display: inline-block;
    margin-left: 10px;
`;

const SavingsName = styled.span`
    font-size: 19px;
`;

const SavingsRate = styled.span`
    font-size: 16px;
    font-weight: normal;
    vertical-align: top;
`;

const Savings = () => {
    return (
        <SavingsInfo>
            <Thumbnail></Thumbnail>
            <SavingsDetail>
                <SavingsName>짱구 자유적금</SavingsName><br />
                <SavingsRate>연 3.5% / 3~36개월</SavingsRate>
            </SavingsDetail>
        </SavingsInfo>
    );
};

export default Savings;