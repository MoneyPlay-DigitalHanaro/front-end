import React, { useState } from 'react';
import axios from 'axios';

function AdditionalInfo() {
  const [userInfo, setUserInfo] = useState({
    studentNumber: '',
    studentName: '',
    eMail: '',
    isTeacher: false,
    studentProfile: '',
    schoolId: '', // 학교 ID를 선택 또는 입력받게 합니다.
    classRoomId: '', // 반 ID를 선택 또는 입력받게 합니다.
    // ... 다른 필요한 정보
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 백엔드 API로 사용자 정보를 전송합니다.
      await axios.post('/api/register/kakao', userInfo);
      alert('정보가 저장되었습니다.');
    } catch (error) {
      console.error('Error saving user info:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="studentName"
        value={userInfo.studentName}
        onChange={handleChange}
        placeholder="학생 이름"
      />
      <input type="text" name="schoolId" value={userInfo.schoolId} onChange={handleChange} placeholder="학교" />
      <input type="text" name="studentGrade" value={userInfo.studentGrade} onChange={handleChange} placeholder="학년" />
      <input type="text" name="studentClass" value={userInfo.studentClass} onChange={handleChange} placeholder="반" />
      <input
        type="text"
        name="studentNumber"
        value={userInfo.studentNumber}
        onChange={handleChange}
        placeholder="번호"
      />
      <input type="text" name="eMail" value={userInfo.eMail} onChange={handleChange} placeholder="이메일" />
      <input
        type="text"
        name="studentProfile"
        value={userInfo.studentProfile}
        onChange={handleChange}
        placeholder="상태메시지"
      />

      <button type="submit">제출</button>
    </form>
  );
}

export default AdditionalInfo;
