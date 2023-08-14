// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button } from 'react-bootstrap';

// function UsernameFetcher() {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [username, setUsername] = useState('');

//   const handleFetchUsername = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/decodeToken', { token });
//       setUsername(response.data.username);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     // 페이지 로드시 토큰 설정
//     setToken(localStorage.getItem('token'));
//   }, []);

//   return (
//     <div>
//       <Button onClick={handleFetchUsername}>유저네임 가져오기</Button>
//       {username && <p>{username}님 안녕하세요!</p>}
//     </div>
//   );
// }

// export default UsernameFetcher;

