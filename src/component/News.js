import React from 'react';
import styled from 'styled-components';

const NewsLink = styled.a`
    text-decoration: none;
    color: black;
`;
const NewsThumbnail = styled.img`
    width: 330px;
    height: 165px;
    border-radius: 20px;
    position: static;
    margin: 10px 0;
`;
const NewsTitle = styled.div`
    font-size: 17px;
    margin-top: 10px;
    margin-left: 20px;   
    text-align: left;
    width: 330px;
    box-sizing: border-box;
`;

const NewsContent = styled.div`
    font-size: 14px;
    font-weight: 200;
    width: 330px;
    max-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 30px;
`;
// const News = ({news_imageUrl, news_title, news_content}) => {
//     return (
//         <div>
//             <img src={news_imageUrl} alt='newsThumb' />
//             <br /><br />
//             <div>  {news_title} </div>
//             <div>  {news_content} </div>
//             <br />
//         </div>
//     );
// };
const News = ({news_imageUrl, news_title, news_content, news_index}) => (
    <div>
        <NewsLink href={`/news/detail?index=${news_index}`}>
            <NewsTitle> {news_title} </NewsTitle>
            <NewsThumbnail src={news_imageUrl} alt='newsThumb' />
        </NewsLink>
        <NewsContent>  {news_content} </NewsContent>
    </div>
);


export default News;