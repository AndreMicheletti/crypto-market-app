import {
  FETCH_CURRENCIES_START,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  FETCH_ICON_SUCCESS
} from './types';

import axios from 'axios';
const headers = {
   Accept: 'application/json',
   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
}

var CancelToken = axios.CancelToken;

export const fetchCurrencyList = () => {
  var source = CancelToken.source();

  return (dispatch) => {
    dispatch({ type: FETCH_CURRENCIES_START });

    setTimeout(() => {
      // source.cancel('Request Timed out.');
    }, 4000)

    axios('https://api.coinmarketcap.com/v1/ticker', {
      method: 'get',
      headers: { ...headers },
      timeout: 4000
    })
      .catch((error) => {
        handleFetchError(dispatch, error);
        return Promise.reject(error);
      })
      .then((response) => {
        handleFetchSuccess(dispatch, response);
        return;
      })
  }
}

const handleFetchError = (dispatch, error) => {
  console.log(error.message);
  dispatch({
    type: FETCH_CURRENCIES_FAILURE,
    payload: error.message
  });
}

const handleFetchSuccess = (dispatch, response) => {
  console.log(response);
  dispatch({
    type: FETCH_CURRENCIES_SUCCESS,
    payload: response.data
  })
}

const fetchIcon = (coinName) => {
  return (dispatch) => {
    axios(`https://files.coinmarketcap.com/static/img/coins/32x32/${coinName.toLowerCase()}.png`, {
      method: 'get', headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
      }
    })
    // Handle request error
    .catch((error) => {
      return Promise.reject(error);
    })
    // Handle request success
    .then((response) => {
      dispatch({
        type: FETCH_ICON_SUCCESS,
        payload: {
          name: iconName,
          data: response.data
        }
      })
      return;
    })
  }
}
