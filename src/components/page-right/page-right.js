import React from 'react';
import TableListItem from '../table-list-item/table-list-item';
import './page-right.css';

const PageRight = ({ items }) => {

  const head = (
    <thead>
      <tr>
        <th key={1}>Name</th>
        <th key={2}>Euro</th>
        <th key={3}>Pln</th>
      </tr>
    </thead>
  )
  const max = items.reduce((prev, cur) => {
    if (+prev.eur > +cur.eur) {
      return prev
    }
    return cur
  }, 0);
  console.log('max: ', max);
  const filter = items.filter(item => item.eur === max.eur)
  console.log('filter: ', filter);
  const elements = filter.map((item) => {
    const { id, name, eur, pln } = item;
    return (
      <tr key={id}>
        <td key={1}><TableListItem
          name={name} /></td>
        <td key={2}><TableListItem
          eur={eur} /></td>
        <td key={3}><TableListItem
          eur={pln} /></td>
      </tr>
    );
  });

  return (<div className="table-responsive">
    <p className="topName">Top transaction</p>
    <table className="table table-bordered">
      {head}
      <tbody>
        {elements}
      </tbody>
    </table>
  </div>);
};

export default PageRight;