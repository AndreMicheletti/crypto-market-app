import React from 'react';
import { Animated, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class AnimatedSplash extends React.Component {

  state = {
    coinBottomAnim: new Animated.Value(-150),
    coinRotateAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.sequence([
      Animated.spring(this.state.coinBottomAnim, {
        toValue: 210,
        duration: 500
      }),
      Animated.timing(this.state.coinRotateAnim, {
        toValue: 361,
        duration: 500
      })
    ]).start();
    setTimeout(() => {
      Actions.appmain()
    }, 3000)
  }

  render() {
    console.disableYellowBox = true;
    const { backgroundView, backgroundImage, backgroundText } = styles;
    const { coinBottomAnim, coinRotateAnim } = this.state;

    return (
      <View style={backgroundView}>
        <Image style={backgroundImage} source={require('./assets/background.png')}/>
        <Animated.View style={{
          ...backgroundText,
          bottom: coinBottomAnim,
          rotation: coinRotateAnim
        }}>
          <Image source={require('./assets/coin.png')}/>
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  backgroundImage: {
    position: 'absolute'
  },
  backgroundText: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -120
  },
  backgroundView: {
    flex: 1
  }
};
