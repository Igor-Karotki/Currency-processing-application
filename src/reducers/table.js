
var maxId = 999;

const initialState = {
  items: [],
  currencyRate: 1,
}

export function tableReducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_ITEM':
      const id = action.payload;
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { ...state, items: items }
    case 'ADD_ITEM':
      const { name, eur } = action.payload;
      const item = createItem(state.currencyRate, name, eur);
      return { ...state, items: [...state.items, item] }
    case 'CHANGE_CURRENCYRATE':
      return { ...state, currencyRate: action.payload }
    default:
      return state
  }
}

function createItem(currencyRate, name, eur) {
  return {
    id: ++maxId,
    name,
    eur,
    pln:String(eur*currencyRate)
  };
};  

