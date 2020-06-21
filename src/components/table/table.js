import React from 'react';
import TableListItem from '../table-list-item/table-list-item';
import './table.scss';

const Table = ({ items, onDelete, currencyRate }) => {
  const head = (
    <thead>
      <tr>
        <th key={1}>Name</th>
        <th key={2}>EUR</th>
        <th key={3}>PLN</th>
        <th key={4}></th>
      </tr>
    </thead>
  );

  let plnSum = 0, eurSum = 0;

  const elements = items.map((item) => {
    const { id, name, eur } = item;
    const pln = eur * currencyRate;
    eurSum = eurSum + eur;
    plnSum = plnSum + pln;
    return (
      <tr key={id}>
        <td key={1}><TableListItem
          name={name} /></td>
        <td key={2}><TableListItem
          eur={eur.toFixed(2)} /></td>
        <td key={3}><TableListItem
          pln={pln.toFixed(2)} /></td>
        <td key={4}><button type="button"
          className="btn btnDelete"
          onClick={() => onDelete(id)}>
          <i className="fa fa-trash-o"></i>
        </button></td>
      </tr>
    );
  });
  const sum = (
    <tr className="sum" key={1}>
      <td>
      </td>
      <td>
        <div className="table-list-item">Total EUR = {eurSum.toFixed(2)}</div>
      </td>
      <td>
        <div className="table-list-item">Total PLN = {plnSum.toFixed(2)}</div>
      </td>
      <td>
      </td>
    </tr>
  );

  return (
    <div className="table-responsive table-left">
      <p>Transactions</p>
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