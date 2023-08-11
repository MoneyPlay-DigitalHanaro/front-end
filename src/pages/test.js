/* eslint-disable */

import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Admin3() {
    const [s1, setS1] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:8080/admin").then((response)=>{
        console.log(response);
        setS1(response);
    })
    },[])
    // return (
    //     {s1}
    // );
};

export default Admin3;
