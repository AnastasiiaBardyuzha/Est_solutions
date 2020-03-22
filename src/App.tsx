import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Subscription } from './components/Subscription/Subscription';
import { store } from './redux/store';
import './App.css';

export const App: FC = () => (
  <div className="wrapper">
    <Provider store={store}>
      <Subscription />
    </Provider>
  </div>
);
