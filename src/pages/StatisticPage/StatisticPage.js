import React, { Component } from 'react';

import Chart from '../../components/Chart';

import bitcoinService from '../../services/BitcoinService'
import './StatisticPage.css'

class StatisticPage extends Component {
  
  state = {
    marketPrice: null,
    confirmedTransactions: null,
    loading: true
  }

  async componentDidMount() {
    const marketPrice = await bitcoinService.getMarketPrice()
    const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
    this.setState({marketPrice, confirmedTransactions, loading: false})
  }

  renderChart(chart, color) {
    const {title, data, description} = chart

    return (
        <Chart title={title} 
              data={data} 
              description={description} 
              color={color} />
    )
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>

    return (
      <div className="statistic-page">
        <ul>
          {this.renderChart(this.state.marketPrice, 'blue')}
          {this.renderChart(this.state.confirmedTransactions, 'green')}
        </ul>
      </div>
    );
  }
}

export default StatisticPage;
