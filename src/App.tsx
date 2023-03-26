import React from 'react';

import './App.css';
import { Provider } from 'react-redux';

import UserCard from './features/search/UserCard/UserCard';
import setupStore from './setupStore';

const { store } = setupStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserCard id={123} jobTitle="engineer" name="Ivan Ivanov" />

      </div>
    </Provider>
  );
}

export default App;
