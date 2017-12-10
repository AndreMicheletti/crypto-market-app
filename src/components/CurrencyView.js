import React from 'react';
import {
  Card,
  CardItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Icon
} from 'native-base';
import { View } from 'react-native';

class CurrencyView extends React.Component {

  renderDetail(iconName, text) {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Icon name={iconName} style={{
          fontSize: 20,
          paddingRight: 8,
          color: 'green'
        }} />
        <Text>{text}</Text>
      </View>
    );
  }

  render() {
    const { infosViewStyle, rankingTextStyle } = styles;

    return (
      <Card>
        <CardItem>
          <Left>
            <Text style={rankingTextStyle}>
              1
            </Text>
            <Icon active name="thumbs-up" />
            <Body>
              <Text>Currency Name</Text>
              <Text note>symbol</Text>
            </Body>
          </Left>
        </CardItem>


        <CardItem cardBody>
          <Body>
            <View style={infosViewStyle}>
              {this.renderDetail('navigate', 'Price USD: U$ 1,00')}
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  rankingTextStyle: {
    fontSize: 20,
    position: 'relative',
    paddingRight: 10,
    top: 0, left: 0
  },
  infosViewStyle: {
    paddingLeft: 10, paddingRight: 10,
    paddingTop: 10, paddingBottom: 10,
    flex: 1, flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

export default CurrencyView;
