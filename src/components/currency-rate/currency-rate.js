import React, { Component } from 'react';
import './currency-rate.scss';
export default class CurrencyRate extends Component {

  state = {
    currencyRate: '',
    currentCurrencyRate: '4.45'
  };

  onRateChange = (e) => {
    this.setState({
      currencyRate: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { currencyRate } = this.state;
    if (currencyRate) {
      currencyRate = +currencyRate.replace(',', '.');
      if (!isNaN(currencyRate)) {
        this.props.currencyRate(currencyRate);
        this.setState({ currentCurrencyRate: currencyRate, currencyRate: '' });
      } else {
        alert('Please enter a number');
      }
    } else {
      alert('Please enter Currency Rate');
    }
  };
  render() {
    return (
      <form
        className="currency-rate"
        onSubmit={this.onSubmit}>
        <p >1 EUR = {this.state.currentCurrencyRate} PLN</p>
        <input type="text"
          className="form-control new-table"
          value={this.state.currencyRate}
          onChange={this.onRateChange}
          placeholder="1 EUR = ? PLN" />
        <button type="submit"
          className="btn btnCurrency">Сhange</button>
      </form>
    );
  }
}
