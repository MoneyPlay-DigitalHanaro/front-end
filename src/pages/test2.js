/* eslint-disable */

import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style/css/Admin.module.css';

function AutoLayoutSizingExample2() {
  const tableData = [
    { id: 1, name: '김영희', email: 'younghee1@naver.com', points: '8,250,000' },
    { id: 2, name: '이철수', email: 'cheolsu2@naver.com', points: '5,750,000' },
    { id: 3, name: '박지수', email: 'jisoo3@naver.com', points: '6,150,000' },
    { id: 4, name: '최민호', email: 'minho4@naver.com', points: '3,500,000' },
    { id: 5, name: '정은경', email: 'eunkyung5@naver.com', points: '4,250,000' },
    { id: 6, name: '백현진', email: 'hyunjin6@naver.com', points: '7,910,000' },
    { id: 7, name: '서유리', email: 'yuri7@naver.com', points: '5,780,000' },
    { id: 8, name: '이민재', email: 'minjae8@naver.com', points: '6,980,000' },
    { id: 9, name: '김태현', email: 'taehyun9@naver.com', points: '5,670,000' },
    { id: 10, name: '장혜원', email: 'hyewon10@naver.com', points: '7,560,000' },
];

  const handleCheckboxChange = (id, isChecked) => {
    console.log(id, isChecked);
    // 체크박스의 상태가 변경될 때 필요한 동작을 여기에 추가하십시오.
  };

  return (
    <div>
      {/* ... 기타 코드 생략 ... */}
      {/* 
      <button
        onClick={() => {
          axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((결과) => {
              let newData = [
                [결과.data[0].id, 결과.data[0].title, 결과.data[1].id, 결과.data[1].title], // 첫번째 행
                [결과.data[2].id, 결과.data[2].title, '', ''], // 두번째 행
              ];
              setTableData(newData);
            })
            .catch(() => {
              console.log('실패함');
            });
        }}
      >
        버튼
      </button>

      <table className="table blackline mgtop50">
        {tableData.map((row) => (
          <tr>
            {row.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </table> */}

      <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12">
          <div class="white-box">
            <div class="d-md-flex mb-3">
              <h3 class="box-title mb-0">Recent sales</h3>
              <div class="col-md-3 col-sm-4 col-xs-6 ms-auto">
                <select class="form-select shadow-none row border-top">
                  <option>5학년 1반</option>
                  <option>5학년 2반</option>
                  <option>5학년 3반</option>
                  <option>5학년 4반</option>
                  <option>5학년 5반</option>
                </select>
              </div>
            </div>
            <div class="table-responsive">
              <div className={styles.main}>
                <table className={`table mgtop50 ${styles.table}`}>
                  <thead>
                    <tr className="table-active">
                      <th>선택</th>
                      <th>ID</th>
                      <th>이름</th>
                      <th>이메일</th>
                      <th>포인트</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id}>
                        <th scope="row">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                            className="checkbox"
                          />
                        </th>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <table class="table no-wrap">
                <thead>
                  <tr>
                    <th class="border-top-0">선택</th>
                    <th class="border-top-0">번호</th>
                    <th class="border-top-0">이름</th>
                    <th class="border-top-0">이메일</th>
                    <th class="border-top-0">포인트</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                        className="checkbox"
                      />
                    </td>
                    <td>1</td>
                    <td>Elite admin</td>
                    <td>elite@admin.com</td>
                    <td>
                      <span class="text-success">8,250,000₩</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                        className="checkbox"
                      />
                    </td>
                    <td>2</td>
                    <td>Real Homes WP Theme</td>
                    <td>realhomes@naver.com</td>
                    <td>
                      <span class="text-info">5,750,000₩</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>3</td>
                    <td>Ample Admin</td>
                    <td>ample@admin.com</td>
                    <td>
                      <span class="text-info">6,500,000₩</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>4</td>
                    <td>Medical Pro WP Theme</td>
                    <td>medicalpro@naver.com</td>
                    <td>
                      <span class="text-danger">4,240,000₩</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>5</td>
                    <td>Hosting press html</td>
                    <td>hostingpress@naver.com</td>
                    <td>
                      <span class="text-success">7,990,000₩</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>6</td>
                    <td>Digital Agency PSD</td>
                    <td>digitalagency@naver.com</td>
                    <td>
                      <span class="text-danger">2,780,000₩</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>7</td>
                    <td>Helping Hands WP Theme</td>
                    <td>helpinghands@naver.com</td>
                    <td>
                      <span class="text-success">5,650,000₩</span>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoLayoutSizingExample2;
