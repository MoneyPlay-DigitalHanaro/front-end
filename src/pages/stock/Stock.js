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
          alignItems: "center",
        }}
      >
        <div className={`${styles.StockBox2} mb40`}>
          <div className={`${styles.totalPoint} mb10`}>
            <div className="mb_3">
              {Commas(myStockInfo?.totalChangeStockValue)}
              <span
                style={{
                  color: "#FFA502",
                  fontWeight: 400,
                  marginRight: "3px",
                }}
              >
                {" "}
                ⓟ
              </span>
              를 벌었어요!
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
              {myStockInfo?.totalChangeStockValue} ({" "}
              {myStockInfo?.totalChangeStockRate}% )
            </div>
          </div>

          <div
            className={`${styles.detailPoint} mgr15`}
            style={{ justifyContent: "flex-start", alignContent: "flex-start" }}
          >
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              총 주식 포인트
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              투자한 포인트
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              사용 가능 포인트
            </div>
          </div>

          <div className={`${styles.detailPoint}`}>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              {Commas(myStockInfo?.totalStockValue)}
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              {Commas(myStockInfo?.totalBuyStockPoint)}
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              {Commas(myStockInfo?.availablePoint)}
            </div>
          </div>

          <div className={`${styles.detailPoint} mgr_50 `}>
            <img
              src={dogAndPerson}
              style={{ marginTop: "-50px", marginRight: "30px" }}
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
          오늘 가장 많이 오른 종목
        </div>

        <div className={styles.stockListContainer}>
          {stockData?.map((stock) => {
            const isNegativeDifference =
              stock.previousComparePrice.startsWith("-");
            return (
              <div
                key={stock.name}
                onClick={() => navigate(`/stock/${stock.name}`)}
              >
                <div className={`${styles.stockBox} ft18 mb20`}>
                  <b className={`${styles.stockName} ft18`}>{stock.name}</b>
                  <div>
                    <div className={`${styles.stockBoxDetail} mb20 ft18 mgr30`}>
                      <div className="mb_3">{stock.stockPresentPrice}</div>
                      {/* 현재 가격으로 일단 넣어놈 */}
                      <div
                        className={`${styles.totalPointDefferance} ft14`}
                        style={{ color: "black" }}
                      >
                        1주
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={`${styles.stockBoxDetail2} mb20 ft20`}>
                      <div className="mb_3">{stock.previousComparePrice}</div>
                      <div
                        className={`${styles.detailPointDefferance}`}
                        style={{
                          color: isNegativeDifference ? "blue" : "red",
                        }}
                      >
                        {stock.previousCompareRate} ({" "}
                        {stock.previousCompareRate}% )
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Stock;
