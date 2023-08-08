/* eslint-disable */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import axios from 'axios';

function AutoLayoutSizingExample() {
  var 글제목 = [2, 3, 4];

  return (
    // <Container>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col xs={6}>2 of 3 (wider)</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col xs={5}>2 of 3 (wider)</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    //   array.map(function(a){console.log(a)});
    // </Container>

    <div>
      (생략)
      {글제목.map(function (a) {
        return (
          <div className="list">
            <h4>{a}</h4>
            <p>2월 18일 발행</p>
          </div>
        );
      })}
      {/* 2번쨰 test */}
      <button
        onClick={(a, i) => {
          axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((결과) => {
              console.log(결과.data);
              {
                결과.data[0];
              }
            })
            .catch(() => {
              console.log('실패함');
            });
        }}
      >
        버튼
      </button>
      <table class="table blackline mgtop50">
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
    </div>
  );
}

export default AutoLayoutSizingExample;
