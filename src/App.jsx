import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { keys } from 'lodash';
import StockList from './components/StockList';

const STOCKS = {
  APPL: [
    {
      date: '2018-09-14',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-15',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-16',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-17',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-18',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-19',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
  ],
  MSFT: [
    {
      date: '2018-09-14',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-15',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-16',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-17',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-18',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-19',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
  ],
  GOGL: [
    {
      date: '2018-09-14',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-15',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-16',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-17',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-18',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
    {
      date: '2018-09-19',
      low: 15,
      high: 25,
      open: 16,
      close: 18,
    },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: '',
    };
  }

  onStockSelect(stockName) {
    this.setState({ selectedStock: stockName });
  }

  render() {
    const names = keys(STOCKS);

    return (
      <div>
        <StockList
          stockNames={names}
          selectedStock={this.state.selectedStock}
          onStockClick={this.onStockSelect.bind(this)}
        />

        <div>
          <div>APPL</div>
          <div id="chart">
            <div>High: 15</div>
            <div>Low: 10</div>
            <div>Open: 12</div>
            <div>Close: 14</div>
            <div>Date: 2018-09-03</div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
