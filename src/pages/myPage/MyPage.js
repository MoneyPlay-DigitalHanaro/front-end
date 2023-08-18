/* eslint-disable */

import styles from '../../style/css/MyPage.module.css';
import rocket from '../../image/App/rocket.png';
import rocket90 from '../../image/App/rocket90.png';
import React, { useState, useEffect } from 'react';
import saving1 from '../../image/App/Savings/Saving1.png';
import saving2 from '../../image/App/Savings/Saving2.png';
import saving3 from '../../image/App/Savings/Saving3.png';
import saving4 from '../../image/App/Savings/Saving4.png';

function MyPage() {
  const [selectedTab, setSelectedTab] = useState('주식');
  const SavingBoxes = () => {
    // 각 박스마다 적용될 배경색과 이미지를 배열로 정의
    const boxStyles = [
      { backgroundColor: 'rgba(112, 195, 255, 0.25)', image: saving1 },
      { backgroundColor: '#FFE070', image: saving2 },
      { backgroundColor: 'rgb(255, 120, 120, 0.25)', image: saving3 },
      { backgroundColor: 'rgb(131, 252, 169, 0.25)', image: saving4 },
    ];
  };
  const [isNegativeDifference, setIsNegativeDifference] = useState(false);
  const totalPointDifferenceValue = '- 293,182'; // 예시 값입니다.
  useEffect(() => {
    if (totalPointDifferenceValue.startsWith('-')) {
      setIsNegativeDifference(true);
    } else {
      setIsNegativeDifference(false);
    }
  }, [totalPointDifferenceValue]);

  const DetailPointDifferenceValue = '+ 2,000'; // 예시 값입니다.
  const [isDetailNegativeDifference, setIsDetailNegativeDifference] = useState(false);
  useEffect(() => {
    if (DetailPointDifferenceValue.startsWith('-')) {
      setIsDetailNegativeDifference(true);
    } else {
      setIsDetailNegativeDifference(false);
    }
  }, [DetailPointDifferenceValue]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={`${styles.title} ft20 fw600 ml24 mb17`}>
        <div>내 포인트</div>
      </div>

      <div className="high" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className={`${styles.myPageBox} mb40`}>
          <div className={`${styles.totalPoint} mb20`}>
            <div className="mb_3">
              1,293,182
              <span style={{ color: '#FFA502', fontWeight: 400 }}> ⓟ</span>
            </div>

            <div className={`${styles.totalPointDefferance}`} style={{ color: isNegativeDifference ? 'blue' : 'red' }}>
              {totalPointDifferenceValue} ( 20.3% )
            </div>
          </div>

          <div className={`${styles.detailPoint} mgr15`}>
            <div className="mb5">사용 가능 포인트</div>
            <div className="mb5">총 주식 포인트</div>
            <div className="mb5">총 적금 포인트</div>
          </div>

          <div className={`${styles.detailPoint} `}>
            <div className="mb5">493,812</div>
            <div className="mb5">600,000</div>
            <div className="mb5">200,000</div>
          </div>
          <div className={`${styles.detailPoint} mgr_50 `}>
            <img src={isNegativeDifference ? rocket90 : rocket} style={{ marginTop: '-50px' }} />
          </div>
        </div>

        <div className={`${styles.tabBox} `}>
          <div className={`${styles.tabMenu} mb20`}>
            <button
              className={selectedTab === '주식' ? styles.selectedTab : styles.tab}
              onClick={() => setSelectedTab('주식')}
            >
              주식
            </button>
            <button
              className={selectedTab === '적금' ? styles.selectedTab : styles.tab}
              onClick={() => setSelectedTab('적금')}
            >
              적금
            </button>
          </div>

          {selectedTab === '주식' && (
            <div className={styles.stockListContainer}>
              <div>
                <div className={`${styles.stockBox} ft18 mb20`}>
                  <b className={`${styles.stockName} ft18`}>삼성전자</b>
                  <div>
                    <div className={`${styles.stockBoxDetail} mb20 ft18 mgr30`}>
                      <div className="mb_3">50,000</div>
                      <div className={`${styles.totalPointDefferance} ft14`} style={{ color: 'black' }}>
                        2주
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={`${styles.stockBoxDetail2} mb20 ft20`}>
                      <div className="mb_3">100,000</div>
                      <div
                        className={`${styles.detailPointDefferance}`}
                        style={{ color: isDetailNegativeDifference ? 'blue' : 'red' }}
                      >
                        {DetailPointDifferenceValue} ( -10.3% )
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === '적금' && (
            <div className={styles.savingListContainer}>
              <div>
                <div className={`${styles.savingBox} ft18 mb20`}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <b className={`${styles.savingName} ft18 ml20`}>짱구</b>
                    <img src={saving1} className="img_saving ml_12 mt_10" />

                  </div>
                  <div className="ft14 fw400 mgr_15">
                    <div>현재금액</div>
                    <div>이자</div>
                    <div>시작일</div>
                    <div>만기일</div>
                  </div>

                  <div className="ft14 fw400 mgr30">
                    <div>200,000</div>
                    <div>550</div>
                    <div>2023-01-01</div>
                    <div>2023-06-01</div>
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
