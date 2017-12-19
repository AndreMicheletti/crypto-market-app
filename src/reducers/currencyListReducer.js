import {
  FETCH_CURRENCIES_START,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  FETCH_ICON_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  list: [],
  error: '',
  icon: null
}

const currencyListReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case FETCH_CURRENCIES_START:
      return {
        ...state,
        loading: true,
        list: [],
        error: ''
      }
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: ''
      }
    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload
      }
    case FETCH_ICON_SUCCESS:
      return { ...state, icon: action.payload }
    default:
      return state;
  }
};

export default currencyListReducer;
