/* eslint-disable */

import React, { useState } from 'react';
import axios from 'axios';

function AutoLayoutSizingExample2() {
  const [tableData, setTableData] = useState([[], []]);

  return (
    <div>
      {/* ... 기타 코드 생략 ... */}

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
      </table>
    </div>
  );
}

export default AutoLayoutSizingExample2;
