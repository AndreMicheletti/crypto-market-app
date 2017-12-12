import React from 'react';
import {
  View,
  Text,
  ListView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { fetchCurrencyList } from '../actions';

import CurrencyView from './CurrencyView';

class CurrencyList extends React.Component {

  componentWillMount() {
    this.props.fetchCurrencyList()
    this.createDataStore();
  }

  componentWillUpdate() {
    this.createDataStore();
  }

  createDataStore() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.currencyList);
  }

  renderRow(data) {
    return <CurrencyView currencyData={data} />
  }

  render() {
    if (this.props.loading == true) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
};

const mapStateToProps = (state) => {
  const { loading, currencyList, error } = state.currencyList;

  return  { loading, currencyList, error };
}

export default connect(mapStateToProps, {
  fetchCurrencyList
})(CurrencyList);
