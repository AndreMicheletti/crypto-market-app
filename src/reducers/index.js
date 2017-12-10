import { combineReducers } from 'redux';

const currencyListReducer = (state = [], action) => {
  switch(action.payload) {
    default:
      return state;
  }
};

export default combineReducers({
  currencyList: currencyListReducer
});
