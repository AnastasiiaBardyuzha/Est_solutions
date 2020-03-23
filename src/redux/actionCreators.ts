import { Dispatch } from 'redux';
import {
  SET_NEWS,
  SET_HAS_ERROR,
  SET_USER_NAME,
  SET_PASSWORD,
  SET_IS_LOGGED,
  SET_ERROR_MES,
} from './constants';
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

export const setUserName = (name: string) => ({
  type: SET_USER_NAME,
  userName: name,
});

export const setPassword = (password: string | number) => ({
  type: SET_PASSWORD,
  password,
});

export const setIsLogged = (status: boolean) => ({
  type: SET_IS_LOGGED,
  isLogged: status,
});

export const setHasErrorMes = (status: boolean) => ({
  type: SET_ERROR_MES,
  hasErrorMes: status,
});


export const showNews = () => async (dispatch: Dispatch) => {
  const getNews = () => {
    return getData(`${API_NEWS}`);
  };

  const currentNews = getNews();

  currentNews.then(data => {
    const { articles } = data;

    dispatch(setNews(articles));
  })
    .catch(error => {
      console.log(error);

      dispatch(setHasError(true));
    });
};
