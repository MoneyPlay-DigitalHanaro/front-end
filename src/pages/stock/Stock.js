/* eslint-disable */
import { useNavigate } from "react-router-dom";
import styles from "../../style/css/MyPage.module.css";
import rocket from "../../image/App/rocket.png";
import rocket90 from "../../image/App/rocket90.png";
import React, { useState, useEffect } from "react";
import saving1 from "../../image/App/Savings/Saving1.png";
import saving2 from "../../image/App/Savings/Saving2.png";
import saving3 from "../../image/App/Savings/Saving3.png";
import saving4 from "../../image/App/Savings/Saving4.png";
import dogAndPerson from "../../image/Stock/dogAndperson.png";
import axios from "axios";
import styled from 'styled-components';

const StockContainer = styled.div`
  width: 300px;
  height: 77px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const StockName = styled.h5`
  font-size: 18px;
  font-weight: bold;
`

const StockPrice = styled.h5`
  font-size: 17px;
`;

function Stock() {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);
  const navigate = useNavigate();
  // 3자리수마다 쉼표
  function Commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [selectedTab, setSelectedTab] = useState("주식");
  const SavingBoxes = () => {
    // 각 박스마다 적용될 배경색과 이미지를 배열로 정의
    const boxStyles = [
      { backgroundColor: "rgba(112, 195, 255, 0.25)", image: saving1 },
      { backgroundColor: "#FFE070", image: saving2 },
      { backgroundColor: "rgb(255, 120, 120, 0.25)", image: saving3 },
      { backgroundColor: "rgb(131, 252, 169, 0.25)", image: saving4 },
    ];
  };
  const [isNegativeDifference, setIsNegativeDifference] = useState(false);
  const totalPointDifferenceValue = "- 293,182"; // 예시 값입니다.
  useEffect(() => {
    if (totalPointDifferenceValue.startsWith("-")) {
      setIsNegativeDifference(true);
    } else {
      setIsNegativeDifference(false);
    }
  }, [totalPointDifferenceValue]);

  const DetailPointDifferenceValue = "+ 2,000"; // 예시 값입니다.
  const [isDetailNegativeDifference, setIsDetailNegativeDifference] =
    useState(false);
  useEffect(() => {
    if (DetailPointDifferenceValue.startsWith("-")) {
      setIsDetailNegativeDifference(true);
    } else {
      setIsDetailNegativeDifference(false);
    }
  }, [DetailPointDifferenceValue]);

  const [stockData, setStockData] = useState(null);
  const [myStockInfo, setMyStockInfo] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/stock/")
      .then((response) => {
        setStockData(response.data.stockDataList);
        setMyStockInfo(response.data.myStockInfoDto);
      })
      .catch((error) => {
        console.error("에러", error);
      });
  }, []);

  if (!stockData) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={`${styles.title} ft20 fw600 ml24 mb5`}>
        <div style={{ fontSize: "22px" }}>나의 주식</div>
      </div>

      <div
        className="high"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div className={`${styles.StockBox2} mb40`} style={{ position: "relative", paddingLeft: "10px" }}>
          <div className={`${styles.totalPoint} mb10`}>
            <div className="mb_3">
              {Commas(myStockInfo?.totalChangeStockValue)} 포인트를 &nbsp;
              {myStockInfo.totalChangeStockValue >= 0 ? "벌었어요!" : "잃었어요"}
            </div>

            <div
              className={`${styles.totalPointDefferance}`}
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: 600,
                color: myStockInfo?.totalChangeStockValue < 0 ? "blue" : "red",
              }}
            >
              {myStockInfo?.totalChangeStockValue < 0 ? ( <span>{parseFloat(myStockInfo.totalChangeStockRate).toFixed(2)}%</span>) : (<span>+ {parseFloat(myStockInfo.totalChangeStockRate).toFixed(2)}%</span>)}
            </div>
          </div>

          <div
            className={`${styles.detailPoint}`}
            style={{display: "grid", gridTemplateColumns: "120px 110px", textAlign: "left"}}
          >
            <div className="mb4" style={{ fontWeight: 400, fontSize: "16px" }}>
              총 주식 포인트
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "16px" }}>
              {Commas(myStockInfo?.totalStockValue)}
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "16px" }}>
              투자한 포인트
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "16px" }}>
              {Commas(myStockInfo?.totalBuyStockPoint)}
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "16px" }}>
              사용 가능 포인트
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "16px" }}>
              {Commas(myStockInfo?.availablePoint)}
            </div>
          </div>
          <div className={`${styles.detailPoint} mgr_50 `}>
            <img
              src={dogAndPerson}
              style={{ position: "absolute", right: "0", bottom: "0", width: "100px", height: "120px" }}
            />
          </div>
        </div>

        <div
          style={{
            alignSelf: "flex-start",
            fontSize: "22px",
            fontweight: 600,
            marginLeft: "25px",
            marginBottom: "20px",
          }}
        >
          주식 종목을 확인해보세요
        </div>

        <div className={styles.stockListContainer}>
          {stockData?.map((stock) => {
            const previousComparePrice = parseFloat(stock.previousComparePrice);
            const isNegativeDifference = previousComparePrice < 0;
            const isPositiveDifference = previousComparePrice > 0;
            const priceStyle = {
              color: isNegativeDifference ? "#1E90FF" : isPositiveDifference ? "#FF1E1E" : "black"
            };

            return (
              <StockContainer key={stock.name} onClick={() => navigate(`/stock/${stock.name}`)}>
                <StockName>{stock.name}</StockName>
                <StockPrice style={priceStyle}>{Commas(stock.stockPresentPrice)}<br/ >
                {stock.previousComparePrice >= 0 ? (<span>+{Commas(stock.previousComparePrice)}</span>) : (<span>{Commas(stock.previousComparePrice)}</span>)}
                &nbsp;
                ({stock.previousCompareRate > 0 ? (<span>+{stock.previousCompareRate}%</span>) : (<span>{stock.previousCompareRate}%</span>)})</StockPrice>
              </StockContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Stock;
