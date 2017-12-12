import {
  FETCH_CURRENCIES_START,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  currencyList: [],
  error: ''
}

const currencyListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_CURRENCIES_START:
      return { ...state, loading: true, error: '' }
    case FETCH_CURRENCIES_SUCCESS:
      return {
        loading: false,
        currencyList: action.payload,
        error: ''
      }
    case FETCH_CURRENCIES_FAILURE:
      return {
        loading: false,
        currencyList: [],
        error: ''
      }
    default:
      return state;
  }
};

export default currencyListReducer;
