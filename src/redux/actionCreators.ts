import { Dispatch } from 'redux';
import { SET_NEWS, SET_HAS_ERROR } from './constants';
import { Article } from '../types';
import { getData, API_NEWS } from '../api_helpers';

export const setNews = (currentNews: Article[]) => ({
  type: SET_NEWS,
  newsList: currentNews,
});

export const setHasError = (status: boolean) => ({
  type: SET_HAS_ERROR,
  hasError: status,
});

export const showedNews = () => (dispatch: Dispatch) => {
  const getNews = () => {
    return getData(`${API_NEWS}`);
  };

  const currentNews = getNews();

  currentNews.then(data => {
    const { articles } = data;

    dispatch(setNews(articles));
  });
};
