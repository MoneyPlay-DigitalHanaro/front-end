/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import styles from '../style/css/Test.module.css';

function AdditionalInfoForm() {
  // 상태 설정
  const [userId, setUserId] = useState(''); // 예시: 이 userId는 초기화하는 방법에 따라 달라질 수 있습니다.
  const [school, setSchool] = useState('');
  const [classRoom, setClassRoom] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const [studentProfile, setStudentProfile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      userId,
      school,
      classRoom,
      studentNumber,
      studentName,
      isTeacher,
      studentProfile,
    };

    // 서버로 데이터 전송하는 로직 (예: axios.post('/save-additional-info', formData))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="userId" value={userId} />

      <label htmlFor="school">학교:</label>
      <input
        type="text"
        id="school"
        name="school"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        required
      />
      <br />

      <label htmlFor="classRoom">반:</label>
      <input
        type="text"
        id="classRoom"
        name="classRoom"
        value={classRoom}
        onChange={(e) => setClassRoom(e.target.value)}
        required
      />
      <br />

      <label htmlFor="studentNumber">학번:</label>
      <input
        type="number"
        id="studentNumber"
        name="studentNumber"
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
        required
      />
      <br />

      <label htmlFor="studentName">이름:</label>
      <input
        type="text"
        id="studentName"
        name="studentName"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />
      <br />

      <label htmlFor="isTeacher">교사 여부:</label>
      <input
        type="checkbox"
        id="isTeacher"
        name="isTeacher"
        checked={isTeacher}
        onChange={(e) => setIsTeacher(e.target.checked)}
      />
      <br />

      <label htmlFor="studentProfile">프로필:</label>
      <input
        type="text"
        id="studentProfile"
        name="studentProfile"
        value={studentProfile}
        onChange={(e) => setStudentProfile(e.target.value)}
      />
      <br />

      <button type="submit">제출</button>
    </form>
  );
}

export default AdditionalInfoForm;
