import React from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Text
} from 'native-base';
import { View } from 'react-native';

// Redux import and setup
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// Component import
import CurrencyList from './src/components/CurrencyList';

class App extends React.Component {
  render() {
    const { contentsView, currencyViewStyle } = styles;

    debugger;

    return (
      <Provider store={store}>
        <Container>
          <Header>
            <Body style={{ alignItems: 'center' }}>
              <Title>Crypto Market App</Title>
            </Body>
          </Header>

          <Content>
            <View style={currencyViewStyle}>
              <CurrencyList />
            </View>
          </Content>
        </Container>
      </Provider>
    );
  }
}

const styles = {
  contentsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  currencyViewStyle: {
    paddingLeft: 10, paddingRight: 10
  }
};

export default App;
