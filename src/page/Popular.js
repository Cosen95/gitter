/*
 * @Author: fengshuan 
 * @Date: 2019-06-27 17:51:26 
 * @Last Modified by: fengshuan
 * @Last Modified time: 2019-06-27 18:49:47
 */


import React, { Component } from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from "react-navigation";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class Popular extends Component<Props> {
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          tabBarLabel: 'Tab1'
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          tabBarLabel: 'Tab2'
        }
      }
    }))
    return <View style={{ flex: 1 }}>
      <TabNavigator />
    </View> ;
  }
}

class PopularTab extends Component<Props> {
  render() {
    // const { tabBarLabel } = this.props.navigationOptions;
    console.log('流行页面',this.props);
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          {tabBarLabel}
        </Text> */}
        <Text
          onPress={() => {
            NavigationUtil.goPage('Detail')
          }}
        >跳转详情页</Text>
      </View>
    )
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
