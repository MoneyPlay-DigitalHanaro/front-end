import React from "react";
import logout from "../../image/Login/logout.png";

function LogoutButton() {
  const handleLogout = () => {
    // 로컬 스토리지의 모든 정보를 삭제
    localStorage.clear();

    // 페이지 새로고침
    window.location.href = "/login";
  };

  return (
    <img
      src={logout} // import로 가져온 이미지 경로 사용
      alt="로그아웃"
      onClick={handleLogout}
      style={{
        cursor: "pointer",
        width: "25px",
        height: "25px",
        marginLeft: "230px",
        marginTop: "2px",
      }} // 마우스 커서를 손가락 모양으로 변경
    />
  );
}

export default LogoutButton;
