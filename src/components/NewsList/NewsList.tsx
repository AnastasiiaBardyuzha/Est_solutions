import React, { FC, useState, useEffect } from 'react';
import { API_NEWS, getData } from '../../api_helpers';
import { News } from '../News/News';
import { Article } from '../../types';
import './NewsList.css';


export const NewsList: FC = () => {
  const [newsList, setNewsList] = useState<Article[]>([]);

  useEffect(() => {
    const getNews = () => {
      return getData(`${API_NEWS}`);
    };

    const currentNews = getNews();

    currentNews.then(data => {
      const { articles } = data;

      setNewsList(articles);
    });
  }, []);

  return (
    <div className="news_wrapper">
      {newsList && newsList.map(item => <News key={item.title} news={item} />)}
    </div>
  );
};
