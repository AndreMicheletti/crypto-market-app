import React from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base'

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>
            Hello from drawer.
          </Text>
        </Content>
      </Container>
    );
  }
}
