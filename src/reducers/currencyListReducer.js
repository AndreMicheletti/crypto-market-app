import {
  FETCH_CURRENCIES_START,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  list: [],
  error: ''
}

const currencyListReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case FETCH_CURRENCIES_START:
      return {
        loading: true,
        list: [],
        error: ''
      }
    case FETCH_CURRENCIES_SUCCESS:
      return {
        loading: false,
        list: action.payload,
        error: ''
      }
    case FETCH_CURRENCIES_FAILURE:
      return {
        loading: false,
        list: [],
        error: action.payload
      }
    default:
      return state;
  }
};

export default currencyListReducer;
