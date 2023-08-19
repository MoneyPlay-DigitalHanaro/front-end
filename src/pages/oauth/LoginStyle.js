import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .no-login {
    margin-left: auto;
    padding: 40px 40px;
    color: #b5b5b5;
    text-decoration: underline;
  }
`;
export const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 17vh;
  .logo-icon {
    width: 140px;
  }
  .catch-phrase {
  }
  .kakao {
    width: 30px;
  }
  .login-btn {
    display: flex;
    gap: 4px;
    width: 300px;
    height: 50px;
    border-radius: 8px;
    background-color: #ffeb3b;
    align-items: center;
    justify-content: center;
  }
  span {
    font-weight: 600;
    padding-top: 3px;
  }
`;
