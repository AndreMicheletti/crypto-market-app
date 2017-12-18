import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base'

export default class SideBar extends React.Component {
  render() {
    const { contentStyle } = styles;

    return (
      <Container>
        <Content bounces={false} style={contentStyle}>
          <View style={contentStyle}>
            <Text>
              Hello from drawer.
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
    backgroundColor: '#fff',
    flex: 1,
    top: -1
  }
};
