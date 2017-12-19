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
import { Image, View, TouchableOpacity as Touchable } from 'react-native';

import { connect } from 'react-redux';
import { fetchIcon } from '../actions';

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
        d('ios-clock-outline', 'blue', `Updated at: ${date.toDateString()}`)
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

  renderIcon() {
    const { icon } = this.props;
    if (icon) {
      return (<Image source={{ uri: icon }} style={{ width: 32, height: 32 }} />)
    } else {
      return (<Icon active name="md-cash" style={{ color: '#FFB700' }} />);
    }
  }

  onClick() {
    const { fetchIcon, currencyData } = this.props;
    console.log('clicked!');
    fetchIcon(currencyData.name);
  }

  render() {
    const { infosViewStyle, rankingTextStyle, primaryTextStyle } = styles;
    const { currencyData } = this.props;

    return (
      <Touchable onPress={this.onClick.bind(this)}>
        <View>
          <Card style={{ marginTop: 8 }}>
            <CardItem>
              <Left>
                <Text style={{...rankingTextStyle, ...primaryTextStyle}}>
                  {currencyData.rank}
                </Text>
                {this.renderIcon()}
                <Body>
                  <Text style={primaryTextStyle}>
                    {currencyData.name}
                  </Text>
                  <Text note>
                    {currencyData.symbol}
                  </Text>
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
        </View>
      </Touchable>
    );
  }
}

const styles = {
  primaryTextStyle: {
    color: '#FFB700',
    fontWeight: '600'
  },
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

const mapStateToProps = (state) => {
  return { icon: state.currencyList.icon };
}

export default connect(mapStateToProps, {
  fetchIcon
})(CurrencyView);
