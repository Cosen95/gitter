/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class Welcome extends Component<Props> {
  componentDidMount() {
    this.timer = setTimeout(() => {
      // const { navigation } = this.props;
      // navigation.navigate('Main')
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation
      })
    }, 2000)
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎来到gitter!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
