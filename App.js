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
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('window');
const startY = CONTAINER_HEIGHT / 2 - 25;
const sizeBall = 100;
const radius = 125;
const CONTAINER_WIDTH = width - sizeBall;
const CONTAINER_HEIGHT = height * 0.7 - sizeBall;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  couponPos = new Animated.ValueXY({x: 16.33, y: 50});
  servicePos = new Animated.ValueXY({x: 100, y: 93});
  reserPos = new Animated.ValueXY({x: 50, y: 305});
  ecomerPos = new Animated.ValueXY({x: 120, y: 290});
  notiPos = new Animated.ValueXY({x: 15, y: 300});
  storeInfPos = new Animated.ValueXY({x: 70, y: 180});
  chatPos = new Animated.ValueXY({x: 240, y: 210});
  stampPos = new Animated.ValueXY({x: 80, y: 400});

  _couponPos = new Animated.Value(50);
  _servicePos = new Animated.Value(100);
  _reser = new Animated.Value(500);
  _ecomer = new Animated.Value(420);
  _noti = new Animated.Value(300);
  _storeInf = new Animated.Value(120);
  _chat = new Animated.Value(100);
  _stamp = new Animated.Value(100);
  computeXY = (x, y, slope, _const) => {
    let tempX = (y + _const) / slope;
    let checkX = Math.floor(tempX / CONTAINER_WIDTH);
    let checkY = Math.floor(y / CONTAINER_HEIGHT);
    if (checkX % 2 === 0) {
      tempX = tempX % CONTAINER_WIDTH;
    } else {
      tempX = CONTAINER_WIDTH - (tempX % CONTAINER_WIDTH);
    }

    if (checkY % 2 === 0) {
      y = y % CONTAINER_HEIGHT;
    } else {
      y = CONTAINER_HEIGHT - (y % CONTAINER_HEIGHT);
    }
    return {x: tempX, y};
  };
  componentDidMount() {
    this._couponPos.addListener(({value}) => {
      let y = value;
      let x = sizeBall;
      this.couponPos.setValue(this.computeXY(x, y, 3, 1));
    });
    this._servicePos.addListener(({value}) => {
      let y = value;
      let x = sizeBall;

      this.servicePos.setValue(this.computeXY(x, y, 0.9, 3));
    });
    this._reser.addListener(({value}) => {
      let y = value;
      let x = sizeBall;

      this.reserPos.setValue(this.computeXY(x, y, 6, 5));
    });
    this._ecomer.addListener(({value}) => {
      let y = value;
      let x = sizeBall;

      this.ecomerPos.setValue(this.computeXY(x, y, 8, -70));
    });

    this._noti.addListener(({value}) => {
      let y = value;
      let x = sizeBall;

      this.notiPos.setValue(this.computeXY(x, y, 0.3, 10));
    });

    this._storeInf.addListener(({value}) => {
      let y = value;
      let x = sizeBall;

      this.storeInfPos.setValue(this.computeXY(x, y, 0.5, 12));
    });
    this._chat.addListener(({value}) => {
      let y = value;
      let x = sizeBall;

      this.chatPos.setValue(this.computeXY(x, y, 0.8, 14));
    });
    this._stamp.addListener(({value}) => {
      let y = value;
      let x = sizeBall;

      this.stampPos.setValue(this.computeXY(x, y, 0.1, 1));
    });
    this.animate();
  }
  animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._couponPos, {
          toValue: CONTAINER_HEIGHT,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._couponPos, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._servicePos, {
          toValue: CONTAINER_HEIGHT,
          duration: 90000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._servicePos, {
          toValue: 0,
          duration: 90000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._reser, {
          toValue: CONTAINER_HEIGHT,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._reser, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._ecomer, {
          toValue: CONTAINER_HEIGHT,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._ecomer, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._noti, {
          toValue: CONTAINER_HEIGHT,
          duration: 90000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._noti, {
          toValue: 0,
          duration: 90000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._storeInf, {
          toValue: CONTAINER_HEIGHT,
          duration: 90000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._storeInf, {
          toValue: 0,
          duration: 90000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._chat, {
          toValue: CONTAINER_HEIGHT,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._chat, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._stamp, {
          toValue: CONTAINER_HEIGHT,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),

        Animated.timing(this._stamp, {
          toValue: 0,
          duration: 15000,
          useNativeDriver: 'true',
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };
  render() {
    const transform = [{scale: this._couponPos}];
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            position: 'absolute',
          }}
          activeOpacity={1}
          // onPress={this.animate}
        >
          <Animated.View
            style={[
              styles.item,
              {transform: this.couponPos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>Coupon</Text>
            </FastImage>
          </Animated.View>
          <Animated.View
            style={[
              styles.item,
              {transform: this.servicePos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>Service</Text>
            </FastImage>
          </Animated.View>
          <Animated.View
            style={[
              styles.item,
              {transform: this.reserPos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>Reservation</Text>
            </FastImage>
          </Animated.View>
          <Animated.View
            style={[
              styles.item,
              {transform: this.ecomerPos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>E-commerce</Text>
            </FastImage>
          </Animated.View>
          <Animated.View
            style={[
              styles.item,
              {transform: this.notiPos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>Notification</Text>
            </FastImage>
          </Animated.View>
          <Animated.View
            style={[
              styles.item,
              {transform: this.storeInfPos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>Store Infomation</Text>
            </FastImage>
          </Animated.View>
          <Animated.View
            style={[
              styles.item,
              {transform: this.chatPos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>Chat</Text>
            </FastImage>
          </Animated.View>
          <Animated.View
            style={[
              styles.item,
              {transform: this.stampPos.getTranslateTransform()},
            ]}>
            <FastImage
              style={{
                width: sizeBall,
                height: sizeBall,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
              }}
              source={require('./BluePlanet.png')}
              resizeMode={FastImage.resizeMode.contain}>
              <Text>Stampuuuuuuuuuuu updateee</Text>
            </FastImage>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01193D',
  },
  item: {
    width: sizeBall,
    height: sizeBall, // this is the diameter of circle
    borderRadius: 300,
    position: 'absolute',
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
