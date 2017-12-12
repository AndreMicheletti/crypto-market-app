import { combineReducers } from 'redux';
import currencyListReducer from './currencyListReducer';

export default combineReducers({
  currencyList: currencyListReducer
});
