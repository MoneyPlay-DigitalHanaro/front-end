/* eslint-disable */
import styles from "../../style/css/Stock.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartStock from "../../component/ChartStock";
import { useParams } from "react-router-dom";

function PurchaseStock() {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);
  const { stockName } = useParams();

  const [stockCount, setStockCount] = useState(5);

  function decreaseStock() {
    if (stockCount > 0) setStockCount((prevCount) => prevCount - 1);
  }

  function increaseStock() {
    if (stockCount < 10) setStockCount((prevCount) => prevCount + 1);
  }

  function buyStock() {
    const postData = {
      name: stockName,
      stockPresentPrice: stockData.stockPresentPrice,
      buyAmount: stockCount,
      tradeType: "매수",
    };
    axios
      .post("http://localhost:8080/stock/buy", postData)
      .then((response) => {
        // 성공적으로 요청이 처리되었을 때 처리할 로직
        alert(stockCount + " 주의 주식을 구매하였습니다.");
      })
      .catch((error) => {
        console.error("주식 구매 중 에러 발생:", error);
        // 에러 처리를 원하시면 여기에 로직을 추가하세요.
      });
  }
  function sellStock() {
    const postData = {
      name: stockName,
      stockPresentPrice: stockData.stockPresentPrice,
      sellAmount: stockCount,
      tradeType: "매도",
    };
    console.log(postData);
    axios
      .post("http://localhost:8080/stock/sell", postData)
      .then((response) => {
        // 성공적으로 요청이 처리되었을 때 처리할 로직
        alert(stockCount + " 주의 주식을 판매하였습니다.");
      })
      .catch((error) => {
        console.error("주식 판매 중 에러 발생:", error);
        // 에러 처리를 원하시면 여기에 로직을 추가하세요.
      });
  }

  const [stockData, setStockData] = useState(null);
  const [stockChartData, setStockChartData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/stock/${stockName}`)
      .then((response) => {
        setStockData(response.data.stockDetailData);
        setStockChartData(response.data.dayChartData);
      })
      .catch((error) => {
        console.error("에러", error);
      });
  }, [stockName]);

  if (!stockData) return <div>Loading...</div>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          padding: "25px",
        }}
      >
        <div className={`${styles.title} mgr15`}>{stockData.name}</div>
        <div className={`${styles.titleNumber} `}>005930</div>
      </div>
      <div className={`${styles.stockContainer} `}>
        {/* 이곳에 실제 주식 그래프를 표현하는 코드나 이미지를 넣어주세요. */}
        <ChartStock data={stockChartData} />
        <div
          className={`${styles.title}`}
        >{`${stockData.stockPresentPrice}원`}</div>
        <div
          className={`${styles.difference} ${
            stockData.previousComparePrice.startsWith("+")
              ? styles.blue
              : styles.red
          }`}
        >
          {stockData.previousComparePrice} ({stockData.previousCompareRate}%)
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "50px" }}
        >
          <button
            onClick={decreaseStock}
            style={{
              width: "34px",
              height: "34px",
              border: "none",
              backgroundColor: "rgba(112, 195, 255, 0.5)",
              borderRadius: "30px",
              margin: "1px 6px",
              boxShadow: "2px 2px 2px 0 rgba(0, 0, 0, 0.25",
            }}
          >
            <span>-</span>
          </button>
          <span className={`${styles.title}`} style={{ fontSize: "20px" }}>
            {stockCount}
          </span>{" "}
          주
          <button
            onClick={increaseStock}
            style={{
              width: "34px",
              height: "34px",
              border: "none",
              backgroundColor: "rgba(255, 30, 30, 0.5)",
              borderRadius: "30px",
              margin: "1px 6px",
              boxShadow: "2px 2px 2px 0 rgba(0, 0, 0, 0.25",
            }}
          >
            <span>+</span>
          </button>
        </div>

        <div style={{ marginTop: "30px" }}>
          <button className={`${styles.stockButton}`} onClick={buyStock}>
            <b>사기</b>
          </button>
          <button className={`${styles.stockButton}`} onClick={sellStock}>
            <b>팔기</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseStock;
