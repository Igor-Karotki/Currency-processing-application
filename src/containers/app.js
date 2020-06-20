import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addItem } from '../actions/TableActions'
import { deleteItem } from '../actions/TableActions'
import { changeCurrencyRate } from '../actions/TableActions'


import Table from '../components/table/table';
import CurrencyRate from '../components/currency-rate/currency-rate';
import ItemAddForm from '../components/item-add-form/item-add-form';
import PageRight from '../components/page-right/page-right';
import Sum from '../components/sum/sum';
import './app.css';

class App extends Component {
  render() {
    const { items, addItem, deleteItem, changeCurrencyRate } = this.props;
    console.log('items: ', items);
    return (
      <div className="marg">
        {/* <AppHeader /> */}
        <CurrencyRate currencyRate={changeCurrencyRate}/>
        <Table onDelete={deleteItem} items={items} />
        <ItemAddForm onItemAdded={addItem} />
        <PageRight items={items} />
        <Sum items={items} />
        {/* <AppFooter /> */}
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
