import React from 'react';
import TableListItem from '../table-list-item/table-list-item';
import './topTransactions.css';

const topTransactions = ({ items, currencyRate }) => {
  const head = (
    <thead>
      <tr>
        <th key={1}>Name</th>
        <th key={2}>EUR</th>
        <th key={3}>PLN</th>
      </tr>
    </thead>
  )
  const max = items.reduce((prev, cur) => {
    if (+prev.eur > +cur.eur) {
      return prev
    }
    return cur
  }, 0);

  const duplicates = items.filter(item => item.eur === max.eur);
  console.log('duplicates: ', duplicates);

  const elements = duplicates.map((item) => {
    const { id, name, eur } = item;
    const roundedEur = Math.floor(eur * 100) / 100;
    const pln = Math.floor(eur * currencyRate * 100) / 100;
    return (
      <tr key={id}>
        <td key={1}><TableListItem
          name={name} /></td>
        <td key={2}><TableListItem
          eur={roundedEur} /></td>
        <td key={3}><TableListItem
          eur={pln} /></td>
      </tr>
    );
  });

  return (
    <div className="table-responsive">
      <p className="topTransactionsHeader">Top transactions</p>
      <table className="table table-bordered">
        {head}
        <tbody>
          {elements}
        </tbody>
      </table>
    </div>);
};

export default topTransactions;