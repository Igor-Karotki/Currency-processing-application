
export function addItem(name, eur) {
  return {
    type: 'ADD_ITEM',
    payload: 
    {
      'name' : name,
      'eur' : eur,
    },
  }
}
export function deleteItem(id) {
  return {
    type: 'DELETE_ITEM',
    payload: id,
  }
}
export function changeCurrencyRate(currencyRate) {
  return {
    type: 'CHANGE_CURRENCYRATE',
    payload: currencyRate,
  }
}

