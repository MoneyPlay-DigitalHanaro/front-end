import React, { useState, useEffect } from 'react';
import axios from 'axios';
import instance from '../oauth/instance';
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
            <h1>Word List</h1>
            <ul>
                {words.map((word) => (
                    <li key={word.wordTodayId}>
                    <strong>{word.wordTodayName}</strong>: {word.todaycontent}</li>
                ))}
            </ul>
        </div>
    );
};
export default WordQuiz;