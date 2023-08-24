import React, { useState, useEffect } from 'react';
import instance from '../oauth/instance';
import styled from 'styled-components';
import Word from '../../component/Word';

const WordTitle = styled.h1`
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    margin-left: 20px;
    margin-bottom: 3px;
`;

const WordUpdate = styled.h5`
    font-size: 17px;
    color: #0e0e0e;
    font-weight: normal;
    text-align: left;
    margin-left: 20px;
`;

const WordQuiz = () => {
    const [words, setWords] = useState([]);
    useEffect(() => {
        fetchWords();
    }, []);
    const fetchWords = async () => {
        try {
            const response = await instance.get('/word');
            setWords(response.data);
        } catch (error) {
            console.error('Error fetching words:', error);
        }
    };
    return (
        <div>
            <WordTitle>매일 3개의 경제 단어를 학습해 보세요</WordTitle>
            <WordUpdate>밤 12시 업데이트</WordUpdate>
            {/* <ul>
                {words.map((word) => (
                    <li key={word.wordTodayId}>
                    <strong>{word.wordTodayName}</strong>: {word.todaycontent}</li>
                ))}
            </ul> */}
            <Word></Word>
        </div>
    );
};
export default WordQuiz;