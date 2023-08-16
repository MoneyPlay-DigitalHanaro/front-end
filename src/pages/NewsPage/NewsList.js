import React, { useEffect, useState } from 'react';
import axios from 'axios';
import News from '../../component/News';
import styled from 'styled-components';

const NewsListContainer = styled.div`
    width: 375px;
    max-height: 812px;
    box-sizing: border-box;
    overflow: auto;
    margin-left: auto;
    margin-right: auto;
`;

const NewsList = () => {
    const [newsArray,setNewsArray] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/news").then((response)=>{
        // console.log(response.data) 
        setNewsArray(response.data);
    })
    },[])
    return (
        <NewsListContainer>
            {
                newsArray.map(e => {
                    return(
                        <News key={e.news_index} news_imageUrl={e.news_imageUrl} news_title={e.news_title} news_content={e.news_content} news_index={e.news_index} />
                    )
                })
            }
        </NewsListContainer>
    );
};

export default NewsList;
