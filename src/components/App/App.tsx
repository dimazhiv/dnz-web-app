import React from 'react';

import './App.css';
import UserCard from '../UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <UserCard id={123} jobTitle="engineer" name="Ivan Ivanov" />

    </div>
  );
}

export default App;
