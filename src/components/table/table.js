import React from 'react';
import TableListItem from '../table-list-item/table-list-item';
import './table.css';

const Table = ({ items, onDelete, currencyRate }) => {
  const head = (
    <thead>
      <tr>
        <th key={1}>Name</th>
        <th key={2}>EUR</th>
        <th key={3}>PLN</th>
        <th key={4}>PLN</th>
      </tr>
    </thead>
  )

  let plnSum = 0, eurSum = 0

  const elements = items.map((item) => {
    const { id, name, eur } = item;
    console.log('eur: ', eur);
    const pln = eur * currencyRate;
    console.log('pln: ', pln);
    eurSum = eurSum + eur
    console.log('eurSum: ', eurSum);
    plnSum = plnSum + pln
    console.log('plnSum: ', plnSum);
    return (
      <tr key={id}>
        <td key={1}><TableListItem
          name={name} /></td>
        <td key={2}><TableListItem
          eur={eur.toFixed(2)} /></td>
        <td key={3}><TableListItem
          pln={pln.toFixed(2)} /></td>
        <td key={4}>
          <button type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    );
  });
  const sum = (
    <tr key={1}>
      <div>Total={eurSum.toFixed(2)}Total={plnSum.toFixed(2)}</div>
    </tr>
  );

  return (
    <div className="table-responsive">
      <p className="topRightHeader">Transactions</p>
      <table className="table table-bordered">
        {head}
        <tbody>
          {elements}
          {sum}
        </tbody>
      </table>
    </div>);
};

export default Table