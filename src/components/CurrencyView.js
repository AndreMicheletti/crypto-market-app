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

  state = { details: [] }

  componentWillMount() {
    this.formatDetails(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.formatDetails(nextProps);
  }

  formatDetails(props) {
    const { price_usd, last_updated } = props.currencyData;
    var date = new Date(parseInt(last_updated) * 1000);
    const d = (i, c, t) => ({ iconName: i, color: c, text: t });
    this.setState({
      details: [
        d('logo-usd', 'green', 'Price: US$' + price_usd),
        d('ios-clock-outline', 'black', `Updated at: ${date.toDateString()}`)
      ]
    });
  }

  renderDetails() {
    return this.state.details.map((detail) => {
      const { iconName, color, text } = detail;
      return (
        <View key={text} style={{ flex: 1, flexDirection: 'row' }}>
          <Icon name={iconName} style={{
            fontSize: 18, paddingRight: 8, color: color, marginTop: 2
          }} />
          <Text>{text}</Text>
        </View>
      );
    });
  }

  render() {
    const { infosViewStyle, rankingTextStyle } = styles;
    const { currencyData } = this.props;

    return (
      <Card style={{ marginTop: 8 }}>
        <CardItem>
          <Left>
            <Text style={rankingTextStyle}>
              {currencyData.rank}
            </Text>
            <Icon active name="md-cash" />
            <Body>
              <Text>{currencyData.name}</Text>
              <Text note>{currencyData.symbol}</Text>
            </Body>
          </Left>
        </CardItem>


        <CardItem cardBody>
          <Body>
            <View style={infosViewStyle}>
              {this.renderDetails()}
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
