/* eslint-disable */
import { Container } from 'react-bootstrap';
import NavBar from '../../component/Navbar.js';
import SideBar from '../../component/Sidebar.js';
import styles from '../../style/css/Admin.module.css';

function Admin() {
  return (
    <div>
      <div className={styles.containerAdmin}>
        <SideBar />
        <NavBar />
        <div className={styles.box}>
          <h3>포인트 주기</h3>
          <p>
            <form class={styles.form}>
              <span class="ft22 mg15">지급 금액 </span>
              <input class={`${styles.inputbox} mgr30`}></input>
              <button type="button" class="btn btn-primary btn-lg">
                일괄 지급
              </button>
            </form>
          </p>
          <h3>포인트 초기화</h3>
          <p>
            <button type="button" class="btn btn-primary mgl50 btn-lg">
              일괄 초기화
            </button>
          </p>
        </div>
        <div className={styles.main}>
          <h1>학생관리 명단</h1>
          <table class="table mgtop50">
            <thead>
              <tr class="table-active">
                <th>선택</th>
                <th>번호22</th>
                <th>이름</th>
                <th>이메일</th>
                <th>포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>1</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>2</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>3</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>4</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>5</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>6</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
              <tr>
                <th scope="row">
                  <input type="checkbox" aria-label="Checkbox for following text input"></input>
                </th>
                <td>7</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>1111</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
