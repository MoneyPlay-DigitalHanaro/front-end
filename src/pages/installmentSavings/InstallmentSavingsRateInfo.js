import React from 'react';
import styled from 'styled-components';

const RateContainer = styled.div`
    padding: 10px;
`;

const Title = styled.h5`
    text-align: left;
    font-weight: bold;
    font-size: 22px;
`;

const Content = styled.div`
    font-weight: normal;
    text-align: left;
    margin-bottom: 20px;
    font-size: 20px;
`;

const InterestTable = styled.table`
    font-weight: normal;
    width: 60%;
`;

const Row = styled.tr`
    width: 70%;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Head = styled.th`
    margin-right: 30px;
`;

const InstallmentSavingsRateInfo = () => {
    return (
        <RateContainer>
            <Title>기본금리</Title>
            <Content>
                계약기간이 1주일 늘어날 때마다 이율이 0.1%씩 높아져요
            </Content>
            <InterestTable>
                <Row>
                    <Head>계약기간</Head>
                    <Head>금리</Head>
                </Row>
                <Row>
                    <td>4개월</td>
                    <td>0.5%</td>
                </Row>
                <Row>
                    <td>5개월</td>
                    <td>0.6%</td>
                </Row>
                <Row>
                    <td>6개월</td>
                    <td>0.7%</td>
                </Row>
                <Row>
                    <td>...</td>
                    <td>...</td>
                </Row>
                <Row>
                    <td>18개월</td>
                    <td>1.9%</td>
                </Row>
                <Row>
                    <td>19개월</td>
                    <td>2.0%</td>
                </Row>
                <Row>
                    <td>20개월</td>
                    <td>2.1%</td>
                </Row>
            </InterestTable>
        </RateContainer>
    );
};

export default InstallmentSavingsRateInfo;