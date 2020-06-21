import React, { Component } from 'react';
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
    const { currencyRate } = this.state;
    if (currencyRate) {
      if (!isNaN(+currencyRate)) {
        this.props.currencyRate(currencyRate);
        this.setState({currentCurrencyRate:currencyRate, currencyRate: '' });
      } else {
        alert('Please enter a number or replace the comma after the number with a dot(99.99)');
      }
    } else {
      alert('Please enter Currency Rate');
    }
  };
  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
        <p>1 EUR={this.state.currentCurrencyRate} PLN</p>
        <input type="text"
          className="form-control new-table"
          value={this.state.currencyRate}
          onChange={this.onRateChange}
          placeholder="PLN" />
        <button type="submit"
          className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
