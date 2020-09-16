/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  Easing,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {},
      containerWidth: 0,
      containerHeight: 0,
      style: {},
    };
  }
  computeXY = (x, y, slope, _const) => {
    let tempX = (y + _const) / slope;
    let checkX = Math.floor(tempX / this.containerWidth);
    let checkY = Math.floor(y / this.this.containerHeight);
    if (checkX % 2 === 0) {
      tempX = tempX % this.containerWidth;
    } else {
      tempX = this.containerWidth - (tempX % this.containerWidth);
    }

    if (checkY % 2 === 0) {
      y = y % this.this.containerHeight;
    } else {
      y = this.this.containerHeight - (y % this.this.containerHeight);
    }
    return {x: tempX, y};
  };
  componentDidMount() {
    const {sizeBall, width, height, style, position} = this.props;
    this.position = position;
    this.containerWidth = width - sizeBall;
    this.containerHeight = height - sizeBall;
    this.style = style;
    console.log('style: ', style, this.style);
    this.sizeBall = sizeBall;
    console.log(this.position.x, this.position.y);
  }
  render() {
    console.log(this.position);
    return (
      <TouchableOpacity>
        <Animated.View
          style={{
            transform: this.state.position?.getTranslateTransform(),
            ...this.style,
            width: 100,
            height: 100,
            backgroundColor: 'red',
          }}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'green',
    width: this.sizeBall,
    height: this.sizeBall, // this is the diameter of circle
    borderRadius: 300,
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default App;
