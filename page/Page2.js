/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

type Props = {};
const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '武汉', '成都', '西安', '重庆', '南宁','厦门', '青岛', '大连'];
export default class FlatListDemo extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataSource: CITY_NAMES
    }
  }
  _renderItem = (data) => {
    return <View style={styles.block}>
      <Text style={styles.desc}>{data.item}</Text>
    </View>
  }
  loadData = (isFreshing) => {
    if(isFreshing) {
      this.setState({
        isLoading: true
      })
    }
    setTimeout(() => {
      let dataUpdate = [];
      if(isFreshing) {
        for(let i = this.state.dataSource.length - 1; i >= 0; i--) {
          dataUpdate.push(this.state.dataSource[i]);
        }
      } else {
        dataUpdate = this.state.dataSource.concat(CITY_NAMES)
      }
      this.setState({
        dataSource: dataUpdate,
        isLoading: false
      })
    }, 2000)
  }
  getIndicator = () => {
    return <View style={styles.indicatorContainer}>
      <ActivityIndicator
        style={styles.indicator}
        color={'orange'}
        size={'large'}
        animating={true}
      />
      <Text>加载更多...</Text>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={(data) => this._renderItem(data)}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              colors={['red']}
              refreshing={this.state.isLoading}
              onRefresh={() => {
                this.loadData(true)
              }}
            />
          }
          ListFooterComponent={() => this.getIndicator()}
          onEndReached={() => {
            this.loadData(false)
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  block: {
    height: 200,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#169',
  },
  desc: {
    color: 'white'
  },
  indicatorContainer: {
    alignItems: 'center'
  },
  indicator: {
    margin: 20
  }
});
