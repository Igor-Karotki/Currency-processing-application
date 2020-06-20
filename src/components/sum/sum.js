import React from 'react';
import './sum.css';

const Sum = ({ items }) => {
  console.log('items: ', items);

  const sum = items.reduce((sum, current) => {
  console.log('sum: ', sum);
  console.log('current: ', current);

    return sum + +current.eur;
  }, 0);
  return (
    <p>Sum of Euro = {sum}</p>
  );
};

export default Sum;