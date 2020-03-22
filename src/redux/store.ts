import { createStore, AnyAction, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  SET_NEWS,
  SET_HAS_ERROR,
  SET_USER_NAME,
  SET_PASSWORD,
  SET_IS_LOGGED,
} from './constants';
import { Article } from '../types';

export interface State {
  isLogged: boolean;
  hasError: boolean;
  newsList: Article[] | [];
  enteredUserName: string;
  enteredPassword: string | number;
  userName: string;
  password: string | number;
}

const initialState = {
  isLogged: false,
  hasError: true,
  newsList: [],
  enteredUserName: '',
  enteredPassword: '',
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

    case SET_USER_NAME:
      return {
        ...state,
        enteredUserName: action.enteredUserName,
      };

    case SET_PASSWORD:
      return {
        ...state,
        enteredPassword: action.enteredPassword,
      };

    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.isLogged,
      };

    default:
      return state;
  }
};

export const store = createStore(reduser, applyMiddleware(thunk));
