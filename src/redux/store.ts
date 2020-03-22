import { createStore, AnyAction, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  SET_NEWS,
  SET_HAS_ERROR,
} from './constants';
import { Article } from '../types';

export interface State {
  isLogged: boolean;
  hasError: boolean;
  newsList: Article[] | [];
  userName: string;
  password: string | number;
}

const initialState = {
  isLogged: false,
  hasError: true,
  newsList: [],
  userName: 'admin',
  password: 12345,
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

    default:
      return state;
  }
};

export const store = createStore(reduser, applyMiddleware(thunk));
