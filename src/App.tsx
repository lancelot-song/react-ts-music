import React from 'react';
import { Provider } from 'react-redux';
import Routers from './router';
import store from './store';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
