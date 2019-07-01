/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import Popular from './Popular';
import Trend from './Trend';
import Favorite from './Favorite';
import My from './My';
import NavigationUtil from '../navigator/NavigationUtil';


type Props = {};
export default class Home extends Component<Props> {
  _tabNavigator() {
    return createAppContainer(createBottomTabNavigator({
      Popular: {
        screen: Popular,
        navigationOptions: {
          tabBarLabel: "最热",
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons
             name={"whatshot"}
             size={26}
             style={{ color: tintColor }}
            />
          )
        }
      },
      Trend: {
        screen: Trend,
        navigationOptions: {
          tabBarLabel: "趋势",
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
             name={"md-trending-up"}
             size={26}
             style={{ color: tintColor }}
            />
          )
        }
      },
      Favorite: {
        screen: Favorite,
        navigationOptions: {
          tabBarLabel: "收藏",
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons
             name={"favorite"}
             size={26}
             style={{ color: tintColor }}
            />
          )
        }
      },
      My: {
        screen: My,
        navigationOptions: {
          tabBarLabel: "我的",
          tabBarIcon: ({ tintColor, focused }) => (
            <Entypo
             name={"user"}
             size={26}
             style={{ color: tintColor }}
            />
          )
        }
      },
    }))
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    const TabNavigator = this._tabNavigator();
    return <TabNavigator />
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
