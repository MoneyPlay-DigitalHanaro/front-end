import React from 'react';
import styled from 'styled-components';

const NewsTitle = styled.div`
    font-size: 22px;
    margin: 30px 0 15px 15px;
    text-align: left;
    box-sizing: border-box;
`;

const NewsContent = styled.div`
    font-size: 16px;
    font-weight: 200;
    text-align: left;
    max-width: 375px;
    overflow: auto;
    margin: 5px 10px 30px 10px;

    img {
        max-width: 100%;
        border-radius: 20px;
    }

    figcaption {
        font-size: 14px;
    }
`;

const NewsDetail = ({news_title, news_content}) => (
    <div>
        <NewsTitle> {news_title} </NewsTitle>
        <NewsContent dangerouslySetInnerHTML={{ __html: news_content }} />
    </div>
);

export default NewsDetail;