import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { News } from '../News/News';
import { Page404 } from '../Page404/Page404';
import { Article } from '../../types';
import { State } from '../../redux/store';
import { showNews as loadNews } from '../../redux/actionCreators';
import './NewsList.css';

interface StateProps {
  newsList: Article[];
  hasError: boolean;
  showNews: () => void;
}

type Props = StateProps;

export const NewsListTemp: FC<Props> = ({ showNews, newsList, hasError }) => {
  useEffect(() => {
    showNews();
  }, []);

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
  showNews: loadNews,
};


export const NewsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsListTemp);
