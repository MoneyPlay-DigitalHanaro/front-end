import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {Cookies} from 'react-cookie'
//axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8080';
document.cookie = 'crossCookie=bar; SameSite=None; Secure';
const CLIENT_ID = '262778662e9437ec42d6cc9d231e88bc';
const REDIRECT_URI = 'http://localhost:3000/user/kakao/callback';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const token =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraW1zaDI5NDhAa2FrYW8uY29tIiwibmlja25hbWUiOiJUaGlhZ28iLCJpZCI6MSwiZXhwIjoxNjc2OTczNjk1fQ.yVdRYyybXKExy2LT6-1dUNH9GK5IK3s3KyTgV2-XRjXwcb7qPtPQ0796txNGR-MVYpOI0cFzaWZXqzBLxyjxQQ';

function LoginPage() {
  const [data, setData] = useState([]);

  const onClick = () => {
    //axios.get("http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com"),
    axios
      .get('/auth/me', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  };

  const onClick2 = () => {
    //axios.get("http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com"),
    axios.get('/api/recommand/restaurant').then((response) => {
      setData(response.data);
      console.log(data);
    });
  };

  const onClick3 = () => {
    //axios.get("http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com"),
    axios
      .get('/auth/plan/1', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  };

  const onClick4 = () => {
    let code = new URL(window.location.href).searchParams.get('code');
    const kakaoLogin = async () => {
      axios.get(`localost:8080/api/oauth/token?code=${code}`).then((res) => {
        localStorage.setItem('token', res.headers.authorization);
        setData(res.headers);
      });
    };
    kakaoLogin();
  };

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  // const loginAll = () => {
  //   //2.인가코드를 추출할 변수 생성. 현재 url 주소를 가지고 있다.
  //   const url = new URL(window.location.href);

  //   //3.위에서 만든 URL 에서 code=  라고 써진 키값을 찾아서 벨류를 반환받음.

  //   const code = url.searchParams.get("code");

  //   //4.위에서 얻은 인가코드를 백엔드의 카카로 로그인주소로 보냄.

  //   //4.위에서 얻은 인가코드를 백엔드의 카카로 로그인주소로 보냄.

  //   axios.get(`${REQUEST_ADDRESS}api/oauth/token?code=${code}`).then((res) => {

  //     //5. ok respone 확인하고, 이후 작업 해야함(유저로그인시키기, 토큰 브라우저에 저장)
  //      localStorage.setItem("token", res.data.token);
  //      axios //서버에서 유저정보 요청하는 url
  //        .get(`${REQUEST_ADDRESS}userinfo`, {
  //          headers: {
  //            //헤더에 token을 담아서 전달
  //            Authorization: res.data.token,
  //          },
  //        })
  //          //서버에서 유휴성 검사 - > 확인되면 유저 데이터 전달해주고 프론트에서는
  //      // const setUser = useSetRecoilState(userState);
  //          // recoilstate로 유저 데이터 저장
  //          // 하고 dashboard로 이동 시키기  로그인끝!
  //        .then((response) => {
  //          setUser(response.data);
  //          navi("/dashboard");
  //        });
  //    });
  // };

  return (
    <div>
      <div>
        <a href="localhost:8080/login/oauth2/code/kakao">로그인</a>
        <button onClick={onClick}>불러오기</button>
        <button onClick={kakaoLogin}>카카오로그인</button>
        <button onClick={onClick2}>식당</button>
        <button onClick={onClick3}>플랜</button>
        <button onClick={onClick4}>토큰</button>
      </div>
      {data && <textarea rows={30} value={JSON.stringify(data, null, 2)} />}
      {data.name}
    </div>
  );
}

/*
function KakaoLogin() {
  const setUser = useSetRecoilState(userState);
  const navi = useNavigate();
  // 1.해당 페이지가 로딩되었다면 url 에 인가코드가 담기게 된다.  

  useEffect(() => {
    
    //2.인가코드를 추출할 변수 생성. 현재 url 주소를 가지고 있다. 
    const url = new URL(window.location.href);

    //3.위에서 만든 URL 에서 code=  라고 써진 키값을 찾아서 벨류를 반환받음.
     
    const code = url.searchParams.get("code");

    //4.위에서 얻은 인가코드를 백엔드의 카카로 로그인주소로 보냄.
    
   
     
      //4.위에서 얻은 인가코드를 백엔드의 카카로 로그인주소로 보냄.
    axios.get(`${REQUEST_ADDRESS}api/oauth/token?code=${code}`).then((res) => {
      
     //5. ok respone 확인하고, 이후 작업 해야함(유저로그인시키기, 토큰 브라우저에 저장)
      localStorage.setItem("token", res.data.token);
      axios //서버에서 유저정보 요청하는 url 
        .get(`${REQUEST_ADDRESS}userinfo`, {
          headers: {
            //헤더에 token을 담아서 전달 
            Authorization: res.data.token,
          },
        })
            //서버에서 유휴성 검사 - > 확인되면 유저 데이터 전달해주고 프론트에서는
         // const setUser = useSetRecoilState(userState);
            // recoilstate로 유저 데이터 저장
            // 하고 dashboard로 이동 시키기  로그인끝!
        .then((response) => {
          setUser(response.data);
          navi("/dashboard");
        });
    });
  }, []);
  return <div>KakaoLogin</div>;
}
*/
// function App() {
//   //Test1()
//   return (
//     <div>
//     <a href="http://vple-backend.all.gagark.shop/oauth2/authorization/kakao">
//       Kakao Login
//     </a>
//     </div>
//   );
// }

// function KakaoLoginRedirect() {
//   const params = useParams();

//   useEffect(() => {
//     localStorage.clear();
//     localStorage.setItem("token", params.token);
//     window.location.replace("/");
//   }, []);

//   return <></>;
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default LoginPage;
