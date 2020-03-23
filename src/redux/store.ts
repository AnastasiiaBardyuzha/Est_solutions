import { createStore, AnyAction, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  SET_NEWS,
  SET_HAS_ERROR,
  SET_USER_NAME,
  SET_PASSWORD,
  SET_IS_LOGGED,
  SET_ERROR_MES,
} from './constants';
import { Article } from '../types';

export interface State {
  isLogged: boolean;
  hasError: boolean;
  newsList: Article[];
  userName: string;
  password: string;
  hasErrorMes: boolean;
}

const initialState = {
  isLogged: false,
  hasError: false,
  newsList: [],
  userName: '',
  password: '',
  hasErrorMes: false,
};

export const reduser = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        newsList: action.newsList,
      };

    case SET_HAS_ERROR:
      return {
        ...state,
        hasError: action.hasError,
      };

    case SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };

    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.isLogged,
      };

    case SET_ERROR_MES:
      return {
        ...state,
        hasErrorMes: action.hasErrorMes,
      };

    default:
      return state;
  }
};

export const store = createStore(reduser, applyMiddleware(thunk));
