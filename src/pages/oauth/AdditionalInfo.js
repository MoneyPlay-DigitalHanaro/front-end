/* eslint-disable */

import React, { useState } from 'react';
import './StudentForm.css';
import styles from '../../style/css/Login.module.css';
import { column } from 'stylis';
import person1 from '../../image/Login/person1.png';
import person2 from '../../image/Login/person2.png';
import { left } from '@popperjs/core';

function StudentForm() {
  const [formData, setFormData] = useState({
    studentGrade: '',
    studentClass: '',
    schoolName: '',
    email: '',
    isTeacher: '',
    studentNumber: '',
    studentProfile: '',
    studentName: '',
    image: '',
    nickname: '',
    kakao_id: '',
    myRole: 'MEMBER',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'isStudent', // 추가된 부분
    'schoolName',
    'studentClass',
    'studentNumber',
    'studentName',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버에 formData를 전송하는 로직
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNext = () => {
    // 만약 현재 스텝이 "isStudent"이고, 선택되지 않았다면 경고 표시
    if (currentStep === 0 && (!formData.isStudent || formData.isStudent === '')) {
      alert('빈칸을 채워주세요!');
      return;
    }

    // 다른 스텝에 대한 검증
    if (formData[steps[currentStep]]) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      alert('빈칸을 채워주세요!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
      <div className={`${styles.title} mb50`}>추가정보입력</div>
      <div className={`${styles.loginBox} `}>
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <label className={`${styles.subtitle}  mb30`}>
              학생이신가요?
              <div className={`${styles.subtitle} mt20 mb15`}>
                <label className={`${styles.subtitle} mgr15`}>
                  <input
                    type="radio"
                    name="isStudent"
                    value="yes"
                    checked={formData.isStudent === 'yes'}
                    onChange={handleChange}
                  />
                  <label style={{ marginLeft: '5px' }}>네</label>
                </label>
                <label>
                  <input
                    type="radio"
                    name="isStudent"
                    value="no"
                    checked={formData.isStudent === 'no'}
                    onChange={handleChange}
                  />
                  <label style={{ marginLeft: '5px' }}>아니요</label>
                </label>
              </div>
            </label>
          )}
          {currentStep === 1 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>학교 이름:</div>
              <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} required />
            </label>
          )}
          {currentStep === 2 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>학년:</div>
              <input type="text" name="studentClass" value={formData.studentClass} onChange={handleChange} required />
            </label>
          )}
          {currentStep === 3 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>반:</div>
              <input type="text" name="studentNumber" value={formData.studentNumber} onChange={handleChange} required />
            </label>
          )}
          {currentStep === 4 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>학생 이름이 뭔가요?:</div>
              <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
            </label>
          )}

          <br />

          <div>
            {currentStep < steps.length - 1 ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <button type="button" onClick={handleNext} className="next-button">
                    다음
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '30px' }}>
                  <img
                    src={person1}
                    className="person1"
                    style={{ position: 'absolute', bottom: '567px', right: '640px' }}
                  />
                  <img
                    src={person2}
                    className="person2"
                    style={{ position: 'absolute', bottom: '567px', right: '577px' }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <input type="submit" value="제출" className="submit-button" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '30px' }}>
                  <img
                    src={person1}
                    className="person1"
                    style={{ position: 'absolute', bottom: '567px', right: '640px' }}
                  />
                  <img
                    src={person2}
                    className="person2"
                    style={{ position: 'absolute', bottom: '567px', right: '577px' }}
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
