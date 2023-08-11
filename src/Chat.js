
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Chat = () => {
    const [s1, setS1] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:8080/chat").then((response)=>{
        console.log(response);
        setS1(response);
    })
    },[])
    // return (
    //     {s1}
    // );
};

export default Chat;