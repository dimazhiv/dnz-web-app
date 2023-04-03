import React from 'react';

import { Box } from '@mui/material';
import { Provider } from 'react-redux';

import SearchField from './features/search/SearchField/SearchFieldContainer';
import UserList from './features/search/UserList/UserListContainer';
import setupStore from './setupStore';

import './App.css';

const { store } = setupStore();

function AppContainer() {
  return (
    <Box className="App">
      <SearchField />

      <UserList />
    </Box>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
