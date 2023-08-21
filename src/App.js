/* eslint-disable */
import React from 'react';
import './style/css/Admin.module.css';

// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

import Admin from './pages/admin/Admin';
import NavBar from './component/Navbar.js';
import SideBar from './component/Sidebar';
import NewsList from './pages/NewsPage/NewsList';
import NewsDetail from './pages/NewsPage/NewsDetail';
import Login from './pages/oauth/Login';
import AdditionalInfo from './pages/oauth/AdditionalInfo';
import KakaoAuthHandle from './pages/oauth/KakaoAuthHandle';

import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/mainPage/Main.js';
import AutoLayoutSizingExample from './pages/test';
import AutoLayoutSizingExample2 from './pages/test2';
import QrCode from './pages/QR_Student/qrStudent';
import Join from './pages/Join/Join';
import Footer from './component/Footer';
import MyPage from './pages/myPage/MyPage';
import Admin3 from './pages/test.js';
import AdminStudent from './pages/admin/AdminStudent';
import InstallmentSavings from './pages/installmentSavings/InstallmentSavings';

function App() {
  // useEffect(() => {
  //   // 로컬 스토리지에서 토큰 가져오기
  //   const authToken = localStorage.getItem('Authorization');
  //   if (authToken) {
  //     axios.defaults.headers.common['Authorization'] = authToken;
  //   }
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<AdminStudent />} />
        <Route path="/test3" element={<Admin3 />} />
      </Routes>
      {location.pathname !== '/admin' && location.pathname !== '/student' ? (
        <div className="App-container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<NewsList />} />
            {/* <Route path="/stock" element={<PurchaseStock />} /> */}
            <Route path="/test" element={<AutoLayoutSizingExample />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/news/detail" element={<NewsDetail />} />
            <Route path="/testadmin" element={<AutoLayoutSizingExample2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/additionalInfo" element={<AdditionalInfo />} />
            <Route exact path="/api/login/oauth2/code/kakao" element={<KakaoAuthHandle />} />
          </Routes>
          {/* `/admin` 또는 `/testadmin`이 아닌 경우에만 Footer를 렌더링합니다 */}
          {location.pathname !== '/admin' && location.pathname !== '/testadmin' && <Footer />}
        </div>
      ) : null}
    </div>
  );
}

export default App;
