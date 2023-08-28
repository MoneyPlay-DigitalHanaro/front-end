/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import kakao from '../../image/Login/kakao.png';
import {
    Container,
    WrapLogin,
} from './LoginStyle';
const CLIENT_ID = '262778662e9437ec42d6cc9d231e88bc';
const REDIRECT_URI = `http://${window.location.host}/api/login/oauth2/code/kakao`;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
export default function Login() {
    let navigate = useNavigate();
    const onClickBackHome = () => {
        navigate('/main')
        window.scrollTo(0, 0)
    };
    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    return (
        <>
            <Container>

                <WrapLogin>

                    <div className='catchphrase'>아이코, 로그인하세요</div>
                    <div className='login-btn' onClick={kakaoLogin}>
                        <span>카카오톡으로 로그인</span>
                    </div>
                </WrapLogin>
            </Container>
        </>
    );
}