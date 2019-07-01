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
export default class Page4 extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Page4!
        </Text>
        <Button
          title={'Open Drawer'}
          onPress={() => navigation.openDrawer()}
        />
        <Button
          title={'Close Drawer'}
          onPress={() => navigation.closeDrawer()}
        />
        <Button
          title={'Toggle Drawer'}
          onPress={() => navigation.toggleDrawer()}
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
