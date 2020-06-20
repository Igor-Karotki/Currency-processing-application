import React from 'react';
import './table-list-item.css';

const TableListItem = ({ name, eur, pln }) => {
  return (
    <div className="table-list-item">
      {name}{eur}{pln}
    </div>
  );
};

export default TableListItem;
