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

type Props = {};
export default class HomePage extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to HomePage!
        </Text>
        <Button
          title={'Go Page1'}
          onPress={() => {
            navigation.navigate('Page1', {
              name: '动态'
            })
          }}
        />
        <Button
          title={'Go Page2'}
          onPress={() => {
            navigation.navigate('Page2')
          }}
        />
        <Button
          title={'Go Page3'}
          onPress={() => {
            navigation.navigate('Page3')
          }}
        />
        <Button
          title={'Go Top'}
          onPress={() => {
            navigation.navigate('Top')
          }}
        />
        <Button
          title={'Go Bottom'}
          onPress={() => {
            navigation.navigate('Bottom')
          }}
        />
        <Button
          title={'Go Drawer'}
          onPress={() => {
            navigation.navigate('Drawer')
          }}
        />
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
