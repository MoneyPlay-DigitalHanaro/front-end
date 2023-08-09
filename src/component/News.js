import React from 'react';

const News = ({news_imageUrl, news_title, news_content}) => {
    return (
        <div>
            <img src={news_imageUrl} alt='newsThumb' />
            <br /><br />
            <div>  {news_title} </div>
            <div>  {news_content} </div>
            <br />
        </div>
    );
};

export default News;