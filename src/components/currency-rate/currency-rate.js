import React, { Component } from 'react';

export default class CurrencyRate extends Component {

  state = {
    currencyRate: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { currencyRate } = this.state;
    if (currencyRate) {
      this.setState({
        currencyRate: e.target.value
      })
      this.props.currencyRate(currencyRate);
    } else {
      alert('Please enter Currency Rate');
    }
  };

  onRateChange = (e) => {
    this.setState({
      currencyRate: e.target.value
    })
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
        <p>1 EUR=</p>
        <input type="number"
          className="form-control new-table"
          value={this.state.currencyRate}
          onChange={this.onRateChange}
          placeholder="PLN" />
        <button type="submit"
          className="btn btn-outline-secondary">Dodać</button>
      </form>
    );
  }
}
