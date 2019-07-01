import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
  createSwitchNavigator
} from "react-navigation";
import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Button, Platform, ScrollView } from "react-native";
import Welcome from '../page/Welcome';
import Home from '../page/Home';
import Detail from '../page/Detail';


const InitNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
});
const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      // header: null
    }
  }
});

export default createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator
})

