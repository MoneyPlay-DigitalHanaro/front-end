/* eslint-disable */

import React, { useState } from 'react';
import './StudentForm.css';
import styles from '../../style/css/Login.module.css';
import { column } from 'stylis';
import person1 from '../../image/Login/person1.png';
import person2 from '../../image/Login/person2.png';
import { left } from '@popperjs/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function StudentForm() {
  const navigate = useNavigate();
  // Authorization에서 값을 추출
  const authValue = localStorage.getItem('Authorization');
  const emailPattern = /.+@.+\.com/; // 이메일 패턴
  const email = authValue.match(emailPattern)[0]; // 이메일 추출
  
  const remaining = authValue.replace(email, ''); // 이메일 부분을 제외한 문자열
  
  // remaining에서 문자 부분과 숫자 부분 분리
  const namePattern = /[가-힣]+/; // 한글 이름 패턴
  const nickname = remaining.match(namePattern)[0]; // 이름 추출
  
  const kakaoIdPattern = /\d+/; // 숫자 패턴
  const kakao_id = remaining.match(kakaoIdPattern)[0]; // kakao_id 추출
  
  // URL (이미지 링크) 추출
  const urlPattern = /http[s]?:\/\/[^ ]+/; // URL 패턴
  const image = remaining.match(urlPattern)[0]; // 이미지 URL 추출
  
  // 이제 email, nickname, kakao_id, image 변수에 각각의 값을 할당했습니다.
  

  // formData 초기값 설정
  const [formData, setFormData] = useState({
      studentGrade: '',
      studentClass: '',
      schoolName: '',
      email: email, // 추출한 이메일 값을 초기값으로 설정
      isTeacher: '0',
      studentNumber: '',
      studentProfile: '',
      studentName: '',
      image: image,
      nickname: nickname, // 추출한 nickname 값을 초기값으로 설정
      kakao_id: kakao_id, // 추출한 kakao_id 값을 초기값으로 설정
      myRole: 'MEMBER'
  });
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'isStudent',
    'schoolName',
    'studentGrade',
    'studentClass',
    'studentNumber',
    'studentName',
    'studentProfile',
];


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8080/api/register/kakao', formData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // 응답 처리
    console.log(response.data);
    navigate('/login');
  } catch (error) {
    console.error("데이터 전송 중 오류가 발생했습니다:", error);
  }
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
              <input type="text" name="studentGrade" value={formData.studentGrade} onChange={handleChange} required />
            </label>
          )}
          {currentStep === 3 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>반:</div>
              <input type="text" name="studentClass" value={formData.studentClass} onChange={handleChange} required />
            </label>
          )}
          {currentStep === 4 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>번호:</div>
              <input type="text" name="studentNumber" value={formData.studentNumber} onChange={handleChange} required />
            </label>
          )}
          {currentStep === 5 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>학생 이름이 뭔가요?:</div>
              <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
            </label>
          )}
          {currentStep === 6 && (
            <label className={`${styles.subtitle}  mb30`}>
              <div className={`${styles.subtitle}  mb20`}>학생의 각오!:</div>
              <input type="text" name="studentProfile" value={formData.studentProfile} onChange={handleChange} required />
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
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '200px' }}>
                  <img src={person1} className="person1 mgr_100" />
                  <img src={person2} className="person2" />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <input type="submit" value="제출" className="submit-button" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '200px' }}>
                  <img src={person1} className="person1 mgr_100" />
                  <img src={person2} className="person2" />
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
