import {
  FETCH_CURRENCIES_START,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE
} from './types';

import axios from 'axios';

export const fetchCurrencyList = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CURRENCIES_START });
  }
}
