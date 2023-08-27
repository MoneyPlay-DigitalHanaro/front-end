import React from 'react';
import styled, { css } from 'styled-components';


const NoticeContainer = styled.div`
    padding: 10px;
`;

const NoticeTitle = styled.h4`
    text-align: left;
    font-weight: bold;
    font-size: 22px;
`;

const NoticeContent = styled.div`
    text-align: left;
    font-weight: normal;
    margin-bottom: 20px;
    font-size: 18px;
`;

const InstallmentSavingsNotice = () => {
    return (
        <NoticeContainer>
            <NoticeTitle>가입대상</NoticeTitle>
            <NoticeContent>아이코를 가입한 실명의 개인<br />
                ※ 동일 상품은 1인 1개만 가입 가능해요<br />
                ※ 중도 해지는 불가능해요<br />
                ※ 만기일이 되면 자동으로 만기돼요
            </NoticeContent>
            <NoticeTitle>적금종류</NoticeTitle>
            <NoticeContent>
                정기예금
            </NoticeContent>
            <NoticeTitle>최초 가입금액</NoticeTitle>
            <NoticeContent>
                100만 ~ 1000만 포인트
            </NoticeContent>
            <NoticeTitle>계약기간</NoticeTitle>
            <NoticeContent>
                4 ~ 20주 (주단위)
            </NoticeContent>
            <NoticeTitle>예금자보호대상</NoticeTitle>
            <NoticeContent>
                이 예금은 예금자보호법에 따라 예금보험공사가 보호하되, 보호한도는 본 은행에 있는 귀하의 모든 예금보호 대상 금융상품의 원금과
                소정의 이자를 합하여 1인당 "최고 5천만원"이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.
            </NoticeContent>
        </NoticeContainer>
    );
};

export default InstallmentSavingsNotice;