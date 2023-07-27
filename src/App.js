import React from 'react'
import logo from './logo.svg';
import { Screen } from './SiteComponents/Screen';
import './App.css';

function App() {
	document.title = "The Political Alignment Test"
  return (
    <div className="App">
      <Screen/>
    </div>
  );
}

export default App;
