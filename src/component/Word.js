import React from 'react';
import styled from 'styled-components';

const WordCard = styled.div`
    display: flex;
    margin-top: 30px;
`

const WordItem = styled.div`
    width: 100px;
    height: 150px;
    background-color: rgba(112, 195, 255, 0.5);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WordMeaning = styled.div`
    display: inline-block;
    width: 230px;
    height: 150px;
    border: 3px solid rgba(112, 195, 255, 0.5);
    border-radius: 10px;
    padding: 20px;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Word = () => {
    return (
        <WordCard>
            <WordItem>적금</WordItem>
            <WordMeaning>일정 기간 동안 돈을 모아 이자를 받는 저축 상품입니다.</WordMeaning>
        </WordCard>
    );
};

export default Word;