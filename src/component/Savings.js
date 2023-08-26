import React from 'react';
import styled from 'styled-components';

const SavingsInfo = styled.div`
    /* display: grid;
    grid-template-columns: 80px 250px; */
    text-align: left;
    /* margin-top: 20px; */
`;

// const Thumbnail = styled.div`
//     display: inline-block;
//     width: 60px;
//     height: 60px;
//     border: none;
//     border-radius: 40px;
//     box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25);
//     margin-left: 20px;
// `;

const SavingsLink = styled.a`
    text-decoration: none;
    color: black;
`;

const SavingsDetail = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 10px;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const SavingsName = styled.span`
    font-size: 19px;
`;

const SavingsRate = styled.span`
    font-size: 16px;
    font-weight: normal;
    vertical-align: top;
`;

const Savings = ({ savings_name, savings_rate, savings_minMonth, savings_maxMonth, savings_id }) => {
    return (
        <SavingsInfo>
            {/* <Thumbnail></Thumbnail> */}
            <SavingsDetail>
                <SavingsLink href={`/savings/join?index=${savings_id}`}>
                    <SavingsName> {savings_name} </SavingsName>
                </SavingsLink>
                <SavingsRate>최대 {savings_rate}% / {savings_minMonth}~{savings_maxMonth}주일</SavingsRate>
            </SavingsDetail>
        </SavingsInfo>
    );
};

export default Savings;