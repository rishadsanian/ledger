// src/App.js
import './styles/App.css';
import React from 'react';
import AppRouter from './components/AppRouter';
import TopNavbar from './components/TopNavBar';



function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <AppRouter />
    </div>
  );
}

export default App;
