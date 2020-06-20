import React from 'react';
import './table-list-item.css';

const TableListItem = ({ name, eur }) => {

  return (
    <div className="table-list-item">
      {name}{eur}
    </div>
  );
};

export default TableListItem;
