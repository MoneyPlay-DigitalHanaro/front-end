import React, { useState } from 'react';

function PurchaseStock() {
    const [stockCount, setStockCount] = useState(5);

    function decreaseStock() {
        if (stockCount > 0) setStockCount(prevCount => prevCount - 1);
    }

    function increaseStock() {
        if (stockCount < 10) setStockCount(prevCount => prevCount + 1);
    }

    function buyStock() {
        alert(stockCount + " 주의 주식을 구매하였습니다.");
    }

    function sellStock() {
        alert(stockCount + " 주의 주식을 판매하였습니다.");
    }

    return (
        <div>
            <h1>주식 이름</h1>

            <div style={{
                border: '1px solid black',
                width: '300px',
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px 0'
            }}>
                {/* 이곳에 실제 주식 그래프를 표현하는 코드나 이미지를 넣어주세요. */}
                <span>주식 그래프 (아무거나)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={decreaseStock}>  </button>
                <span>{stockCount}</span> 주
                <button onClick={increaseStock}>  </button>
            </div>

            <div>
                <button onClick={buyStock}>사기</button>
                <button onClick={sellStock}>팔기</button>
            </div>
        </div>
    );
}

export default PurchaseStock;
