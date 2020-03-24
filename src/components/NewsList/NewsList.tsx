import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { News } from '../News/News';
import { Page404 } from '../Page404/Page404';
import { Article } from '../../lib/types';
import { State } from '../../redux/store';
import { showNews } from '../../redux/actionCreators';
import './NewsList.css';

interface StateProps {
  newsList: Article[];
  hasError: boolean;
  loadNews: () => void;
}

export const NewsListTemp: FC<StateProps> = ({ loadNews, newsList, hasError }) => {
  useEffect(() => {
    loadNews();
  }, [loadNews]);

  if (hasError) {
    return <Page404 />;
  }

  return (
    <div className="news_wrapper">
      {newsList && newsList.map(item => <News key={item.title} news={item} />)}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  newsList: state.newsList,
  hasError: state.hasError,
});

const mapDispatchToProps = {
  loadNews: showNews,
};

export const NewsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsListTemp);
