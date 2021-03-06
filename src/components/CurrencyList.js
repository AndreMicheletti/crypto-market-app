import React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { Spinner } from 'native-base';
import { Button } from './common';

import { connect } from 'react-redux';
import { fetchCurrencyList, fetchIcon } from '../actions';

import CurrencyView from './CurrencyView';

class CurrencyList extends React.Component {

  componentWillMount() {
    this.props.fetchCurrencyList()
  }

  renderRow(data) {
    // console.log(data);
    return (
      <CurrencyView
        key={data.index}
        currencyData={data.item}
      />
    );
  }

  renderLoading() {
    return (
      <View style={styles.auxViewStyle}>
        <Spinner color='blue' />
      </View>
    );
  }

  renderError() {
    const { auxViewStyle, errorTextStyle } = styles;
    return (
      <View style={auxViewStyle}>
        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>
        <Button color="blue" onPress={() => this.props.fetchCurrencyList()}>
          Try Again
        </Button>
      </View>
    );
  }

  render() {
    if (this.props.loading == true) {
      return this.renderLoading();
    } else if (this.props.error) {
      return this.renderError();
    } else {
      return (
        <FlatList
          data={this.props.list}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index}
        />
      );
    }
  }
};

const styles = {
  auxViewStyle: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  errorTextStyle: {
    paddingTop: 20, paddingBottom: 20,
    fontSize: 25, color: 'red'
  }
};

const mapStateToProps = (state) => {
  const { list, error, loading } = state.currencyList;
  return { list, error, loading };
}

export default connect(mapStateToProps, {
  fetchCurrencyList,
  fetchIcon
})(CurrencyList);
