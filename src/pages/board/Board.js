import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BoardPage = () => {
    const [boardData, setBoardData] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetchBoardData();
    }, []);
    const fetchBoardData = async () => {
        try {
            const response = await axios.get('/board');
            setBoardData(response.data);
        } catch (error) {
            console.error('Error fetching board data:', error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/board', { message });
            setMessage(''); // 작성 완료 후 메시지 초기화
            fetchBoardData(); // 글 작성 후 데이터 다시 가져오기
        } catch (error) {
            console.error('Error adding board:', error);
        }
    };
    return (
        <div>
        <h1>Board Page</h1>
        <ul>
            {boardData.map((board) => (
                <li key={board.boardId}>
                <strong>{board.studentName}</strong>: {board.message}
                </li>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};
export default BoardPage;