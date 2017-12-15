import React from 'react';
import { StyleProvider } from 'native-base';
import { Scene, Router, Reducer, Stack } from 'react-native-router-flux';

// Redux import and setup
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// Store create
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// Compontents
import AnimatedSplash from './src/AnimatedSplash';
import AppMain from './src/AppMain';
import SideBar from './src/SideBar';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router createReducer={reducerCreate}>
          <Stack key='root' hideNavBar>
            <Scene key='splash' component={AnimatedSplash} initial/>
            <Scene key='appmain' component={AppMain} />
          </Stack>

        </Router>
      </Provider>
    );
  }
}

export default App;
