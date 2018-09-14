import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { map } from 'lodash';

class StockList extends Component {
  constructor(props) {
    super(props);
  }

  onStockClick(stockName) {
    this.props.onStockClick(stockName);
  }

  getStockDiv(selectedStock, stockName) {
    let color = 'black';
    if (stockName === selectedStock) {
      color = 'blue';
    }
    return (
      <div
        key={stockName}
        style={{ color }}
        onClick={this.onStockClick.bind(this, stockName)}
      >
        {stockName}
      </div>
    );
  }

  render() {
    const stocks = map(
      this.props.stockNames,
      this.getStockDiv.bind(this, this.props.selectedStock),
    );

    return <div>{stocks}</div>;
  }
}

export default hot(module)(StockList);
