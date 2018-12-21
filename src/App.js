import React, { Component } from 'react';

import HomePage from './pages/HomePage'
import StatisticPage from './pages/StatisticPage'
import ContactPage from './pages/ContactPage'
import ContactDetails from './pages/ContactDetails'

import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <ContactPage />
        {/* <ContactDetails /> */}
        {/* <StatisticPage /> */}
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
