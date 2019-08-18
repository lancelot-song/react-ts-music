import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import Routers from './router';
import store from './store';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
          <Routers />
      </HashRouter>
    </Provider>
  );
}

export default App;
