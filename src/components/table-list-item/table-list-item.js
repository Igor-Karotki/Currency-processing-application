import React from 'react';
import './table-list-item.scss';

const TableListItem = ({ id, name, eur, pln }) => {
  return (
    <div className="table-list-item">
      {id}{name}{eur}{pln}
    </div>
  );
};

export default TableListItem;