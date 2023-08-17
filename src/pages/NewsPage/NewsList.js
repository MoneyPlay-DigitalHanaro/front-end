import React, { useEffect, useState } from 'react';
import axios from 'axios';
import News from '../../component/News';
const NewsList = () => {
  const [newsArray, setNewsArray] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/news').then((response) => {
      console.log(response.data);
      setNewsArray(response.data);
    });
  }, []);
  return (
    <div>
      {newsArray.map((e) => {
        return (
          <News
            key={e.news_index}
            news_imageUrl={e.news_imageUrl}
            news_title={e.news_title}
            news_content={e.news_content}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
