import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import News from '../../component/NewsDetail.js';
import styled from 'styled-components';
import instance from '../oauth/instance.js';

const NewsDetailContainer = styled.div`
    width: 375px;
    height: 812px;
    box-sizing: border-box;
    overflow: auto;
    margin-left: auto;
    margin-right: auto;
`;

const NewsDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const index = searchParams.get('index');
    setSearchParams({index: index});

    const [newsDetail, setNewsDetail] = useState(null);
    useEffect(()=>{
        instance.get(`http://localhost:8080/news/detail?index=${index}`).then((response)=>{
        // console.log(response.data)
        setNewsDetail(response.data);
    })
    }, [index]);

    if (!newsDetail) {
        return <div>Loading...</div>;
    }
    return (
        <NewsDetailContainer>
            <News key={newsDetail.news_index} news_title={newsDetail.news_title} news_content={newsDetail.news_content} />
        </NewsDetailContainer>
    );
};

export default NewsDetail;