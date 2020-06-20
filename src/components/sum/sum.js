import React from 'react';
import './sum.css';

const Sum = ({ items, currencyRate }) => {
  const eur = items.reduce((eur, current) => {

    return eur + +current.eur;
  }, 0);
  const roundedEur = Math.floor(eur * 100) / 100;
  const pln = Math.floor(eur * currencyRate * 100) / 100;
  return (
    <>
    <p>Sum of EUR = {roundedEur}</p>
    <p>Sum of PLN = {pln}</p>
    </>
  );
};

export default Sum;