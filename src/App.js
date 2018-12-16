import React, { Component } from 'react';

import HomePage from './pages/HomePage/HomePage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'

import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <ContactPage />
        {/* <ContactDetails /> */}
        {/* <StatisticPage /> */}
        {/* <HomePage />   */}
      </div>
    );
  }
}

export default App;
