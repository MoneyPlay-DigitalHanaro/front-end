/* eslint-disable */

import React, { useState } from 'react';
import axios from 'axios';



function Join() {
  return (
    <div>
      <form action="/save-additional-info" method="post">
        <input type="hidden" className="userId" value="${userID}"></input>
        {/* <!-- userId를 hidden 필드로 전달 --> */}
        <div className="rowbox mt7 mb10">
          <label for="school">학교:</label>
          <input type="text" className="school" required></input>
        </div>
        <br></br>
        <div className="rowbox mb10">
          <label for="classRoom">반:</label>
          <input type="text" id="classRoom" name="classRoom" required></input>
          <br></br>
        </div>
        <div className="rowbox mb10">
          <label for="studentNumber">학번:</label>
          <input type="number" id="studentNumber" name="studentNumber" required></input>
          <br></br>
        </div>

        {/*
    <label for="studentName">이름:</label>
    <input type="text" id="studentName" name="studentName" required>
    <label for="isTeacher">교사 여부:</label>
    <input type="checkbox" id="isTeacher" name="isTeacher">
    <label for="studentProfile">프로필:</label>
    <input type="text" id="studentProfile" name="studentProfile"> */}
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default Join;
