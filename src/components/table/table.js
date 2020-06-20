import React from 'react';
import TableListItem from '../table-list-item/table-list-item';
import './table.css';

const Table = ({ items, onDelete }) => {
  const head = (
    <thead>
      <tr>
        <th key={1}>Name</th>
        <th key={2}>Euro</th>
        <th key={3}>Pln</th>
      </tr>
    </thead>
  )
  const elements = items.map((item) => {
    const { id, name, eur, pln } = item;
    return (
      <tr key={id}>
        <td key={1}><TableListItem
          name={name} /></td>
        <td key={2}><TableListItem
          eur={eur} /></td>
        <td key={3}><TableListItem
          eur={pln} /></td>
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

  return (<div className="table-responsive">
    <table className="table table-bordered">
      {head}
      <tbody>
        {elements}
      </tbody>
    </table>
  </div>);
};

export default Table;
