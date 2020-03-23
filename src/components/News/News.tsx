import React, { FC } from 'react';
import { Article } from '../../types';
import './News.css';

interface Props {
  news: Article;
}

export const News: FC<Props> = ({ news }) => {
  const {
    title,
    description,
    url,
    urlToImage,
  } = news;

  return (
    <div className="card card-size">
      <img src={urlToImage} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary btn-position">Go to read</a>
      </div>
    </div>
  );
};
