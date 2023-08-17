import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin4() {
    const [s1, setS1] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/admin")
            .then((response) => {
                const jsonString = JSON.stringify(response, null, 2);
                console.log(response);
                setS1(response); // 주의: response는 전체 응답 객체입니다. 만약 데이터만 필요하면 response.data를 사용해야 합니다.
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            {JSON.stringify(s1, null, 2)}
        </div>
    );
}

export default Admin4;