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
import axios from "axios";
import LogoutButton from "../oauth/Logout";

function MyPage() {
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = authToken;
    }
  }, []);

  const navigate = useNavigate();

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

  const [myPointDto, setMyPoint] = useState(null);
  const [myStockDtoList, setMyStocks] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/mypage/stock")
      .then((response) => {
        setMyPoint(response.data.myPointDto);
        setMyStocks(response.data.myStockDtoList);
      })
      .catch((error) => {
        console.error("에러", error);
      });
  }, []);

  const [myDepositDto, setmyDeposits] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/mypage/deposit")
      .then((response) => {
        setmyDeposits(response.data.myDepositDto);
      })
      .catch((error) => {
        console.error("에러", error);
      });
  }, []);

  if (!myPointDto || !myStockDtoList || !myDepositDto)
    return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={`${styles.title} ft20 fw600 ml24 mb17 mt30`}>
        <div>내 포인트</div>
        <LogoutButton></LogoutButton>
      </div>

      <div
        className="high"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={`${styles.myPageBox} mb40`}>
          <div className={`${styles.totalPoint} mb20`}>
            <div className="mb_3">
              {Commas(myPointDto?.changePointValue)}
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
                color: myPointDto?.changePointValue < 0 ? "blue" : "red",
              }}
            >
              {myPointDto?.changePointValue} (
              {parseFloat(myPointDto?.changePointRate).toFixed(2)}% )
            </div>
          </div>

          <div
            className={`${styles.detailPoint} mgr15`}
            style={{ justifyContent: "flex-start", alignContent: "flex-start" }}
          >
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              총 예금 포인트
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              총 주식 포인트
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              사용 가능 포인트
            </div>
          </div>
          <div className={`${styles.detailPoint}`}>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              {Commas(myPointDto?.totalDepositPoint)}
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              {Commas(myPointDto?.totalStockPoint)}
            </div>
            <div className="mb4" style={{ fontWeight: 400, fontSize: "17px" }}>
              {Commas(myPointDto?.availablePoint)}
            </div>
          </div>
          <div className={`${styles.detailPoint} mgr_50 `}>
            <img
              src={isNegativeDifference ? rocket90 : rocket}
              style={{ marginTop: "-50px" }}
            />
          </div>
        </div>

        <div className={`${styles.tabBox} `}>
          <div className={`${styles.tabMenu} mb20`}>
            <button
              className={
                selectedTab === "주식" ? styles.selectedTab : styles.tab
              }
              onClick={() => setSelectedTab("주식")}
            >
              주식
            </button>
            <button
              className={
                selectedTab === "적금" ? styles.selectedTab : styles.tab
              }
              onClick={() => setSelectedTab("적금")}
            >
              예금
            </button>
          </div>

          {selectedTab === "주식" && (
            <div className={styles.stockListContainer}>
              {myStockDtoList?.map((stock) => {
                // const isNegativeDifference = stock.presentPrice.startsWith("-");
                return (
                  <div
                    key={stock.name}
                    onClick={() => navigate(`/stock/${stock.name}`)}
                  >
                    <div className={`${styles.stockBox} ft18 mb20`}>
                      <b className={`${styles.stockName} ft18`}>{stock.name}</b>
                      <div>
                        <div
                          className={`${styles.stockBoxDetail} mb20 ft18 mgr30`}
                        >
                          <div className="mb_3">{stock.presentPrice}</div>
                          {/* 현재 가격으로 일단 넣어놈 */}
                          <div
                            className={`${styles.totalPointDefferance} ft14`}
                            style={{ color: "black" }}
                          >
                            {stock.hodingStockCount}주
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`${styles.stockBoxDetail2} mb20 ft20`}>
                          <div className="mb_3">{stock.changeStockValue}</div>
                          <div
                            className={`${styles.detailPointDefferance}`}
                            style={{
                              color: isNegativeDifference ? "blue" : "red",
                            }}
                          >
                            ({parseFloat(stock?.changeStockRate).toFixed(2)}% )
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {selectedTab === "적금" && (
            <div className={styles.savingListContainer}>
              <div>
                <div className={`${styles.savingBox} ft18 mb20`}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <b className={`${styles.savingName} ft18 ml20`}>
                      {myDepositDto.depositType.depositName}
                    </b>
                    <img src={saving1} className="img_saving ml_12 mt_10" />
                  </div>
                  <div className="ft14 fw400 mgr_15">
                    <div>총 예금 포인트</div>
                    <div>이자</div>
                    <div>시작 날짜</div>
                    <div>끝나는 날짜</div>
                  </div>
                  <div className="ft14 fw400 mgr30">
                    <div>{myDepositDto.depositAmount}</div>
                    <div>{myDepositDto.interestAmount}</div>
                    <div>{myDepositDto.startDate}</div>
                    <div>{myDepositDto.endDate}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MyPage;
