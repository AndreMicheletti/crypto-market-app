import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Body,
  Content,
  Title,
  StyleProvider
} from 'native-base';

// Theme imports
import getTheme from './themes/crypto-theme/components';
import material from './themes/crypto-theme/variables/material';

import CurrencyList from './components/CurrencyList';

export default class AppMain extends React.Component {
  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Body searchBar style={{ alignItems: 'center' }}>
              <Title>Crypto Market App</Title>
            </Body>
          </Header>

          <Content>
            <View style={styles.currencyViewStyle}>
              <CurrencyList />
            </View>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = {
  currencyViewStyle: {
    paddingLeft: 10, paddingRight: 10
  }
};
