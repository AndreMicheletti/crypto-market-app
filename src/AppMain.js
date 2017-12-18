import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Body,
  Left,
  Button,
  Content,
  Title,
  Icon,
  Right,
  StyleProvider,
  Drawer
} from 'native-base';

// Theme imports
import getTheme from './themes/crypto-theme/components';
import material from './themes/crypto-theme/variables/commonColor';

// Component imports
import CurrencyList from './components/CurrencyList';
import SideBar from './SideBar';

export default class AppMain extends React.Component {

  openDrawer() {
    this.drawer._root.open();
  }
  closeDrawer() {
    this.drawer._root.close();
  }

  render() {

    return(
      <StyleProvider style={getTheme(material)}>
        <Drawer
          ref={(ref) => { this.drawer = ref }}
          component={<SideBar />}
          onClose={this.closeDrawer.bind(this)}
        >
          <Container>
            <Header>
              <Left>
                <Button onPress={this.openDrawer.bind(this)} transparent>
                  <Icon name='list' />
                </Button>
              </Left>
              <Body>
                <Title>Crypto Market</Title>
              </Body>
              <Right />
            </Header>

            <Content>
              <View style={styles.currencyViewStyle}>
                <CurrencyList />
              </View>
            </Content>
          </Container>
        </Drawer>
      </StyleProvider>
    );
  }
}

const styles = {
  currencyViewStyle: {
    paddingLeft: 10, paddingRight: 10
  }
};
