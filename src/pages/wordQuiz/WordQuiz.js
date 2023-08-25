import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const colorOptions = [
    { backgroundColor: "rgba(112, 195, 255, 0.5)", borderColor: "rgba(112, 195, 255, 0.5)" },
    { backgroundColor: "rgba(225, 224, 112, 0.5)", borderColor: "rgba(225, 224, 112, 0.5)" },
    { backgroundColor: "rgba(30, 114, 255, 0.5)", borderColor: "rgba(30, 114, 255, 0.5)" }
];

const WordQuiz = () => {
    const [words, setWords] = useState([]);
    useEffect(() => {
        fetchWords();
    }, []);
    const fetchWords = async () => {
        try {
            const response = await instance.get("http://localhost:8080/word");
            setWords(response.data);
        } catch (error) {
            console.error('Error fetching words:', error);
        }
    };
    return (
        <div>
            <WordTitle>매일 3개의 경제 단어를 학습해 보세요</WordTitle>
            <WordUpdate>밤 12시 업데이트</WordUpdate>
            {words.map((word, index) => (
                <Word key={word.wordTodayId} wordSpelling={ word.wordTodayName } wordMean={ word.todaycontent} 
                    {...colorOptions[index % colorOptions.length]}
                />
            ))}
        </div>
    );
};
export default WordQuiz;
