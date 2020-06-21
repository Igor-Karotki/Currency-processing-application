import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addItem } from '../actions/TableActions'
import { deleteItem } from '../actions/TableActions'
import { changeCurrencyRate } from '../actions/TableActions'

import Table from '../components/table/table';
import CurrencyRate from '../components/currency-rate/currency-rate';
import ItemAddForm from '../components/item-add-form/item-add-form';
import TopTransactions from '../components/topTransactions/topTransactions';
import './app.scss';

class App extends Component {
  render() {
    const { items, addItem, deleteItem, changeCurrencyRate, currencyRate } = this.props;
    return (
      <div className="app">
        <CurrencyRate currencyRate={changeCurrencyRate} />
        <div className="flexTable">
          <Table currencyRate={currencyRate} onDelete={deleteItem} items={items} />
          <TopTransactions currencyRate={currencyRate} items={items} />
        </div>
        <ItemAddForm onItemAdded={addItem} />
      </div>
    );
  };
}

const mapStateToProps = store => {
  return {
    items: store.table.items,
    currencyRate: store.table.currencyRate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (name, eur) => dispatch(addItem(name, eur)),
    deleteItem: (id) => dispatch(deleteItem(id)),
    changeCurrencyRate: (currencyRate) => dispatch(changeCurrencyRate(currencyRate)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
