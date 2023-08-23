/* eslint-disable */
import styles from "../../style/css/Stock.module.css";
import plus from "../../image/Stock/plus.png";
import minus from "../../image/Stock/minus.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartStock from "../../component/ChartStock";

function PurchaseStock() {
  const [stockCount, setStockCount] = useState(5);

  function decreaseStock() {
    if (stockCount > 0) setStockCount((prevCount) => prevCount - 1);
  }

  function increaseStock() {
    if (stockCount < 10) setStockCount((prevCount) => prevCount + 1);
  }

  function buyStock() {
    alert(stockCount + " 주의 주식을 구매하였습니다.");
  }

  function sellStock() {
    alert(stockCount + " 주의 주식을 판매하였습니다.");
  }

  const [stockData, setStockData] = useState(null);
  const [stockChartData, setStockChartData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/stock/삼성전자")
      .then((response) => {
        setStockData(response.data.stockDetailData);
        setStockChartData(response.data.dayChartData);
      })
      .catch((error) => {
        console.error("에러", error);
      });
  }, []);

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
        <div
          style={{
            border: "1px solid black",
            width: "300px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          {/* 이곳에 실제 주식 그래프를 표현하는 코드나 이미지를 넣어주세요. */}
          <span>
            <ChartStock data={stockChartData} />
          </span>
        </div>
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
            style={{ border: "0px", backgroundColor: "white" }}
          >
            <img src={minus}></img>
          </button>
          <span className={`${styles.title}`}>{stockCount}</span> 주
          <button
            onClick={increaseStock}
            style={{ border: "0px", backgroundColor: "white" }}
          >
            <img src={plus}></img>{" "}
          </button>
        </div>

        <div style={{ marginTop: "30px" }}>
          <button className={`${styles.stockButton}`} onClick={buyStock}>
            사기
          </button>
          <button className={`${styles.stockButton}`} onClick={sellStock}>
            팔기
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseStock;
