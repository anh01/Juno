import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Card from './partials/Card';
import GridViewProduct from './partials/GridViewProduct';
import Top from './Top';

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollableTabView
          renderTabBar={() => (
            <DefaultTabBar
              backgroundColor='#7D59C8'
              inactiveTextColor='#E4DDF4'
              activeTextColor='#FFFFFF'
              underlineStyle={{ backgroundColor: '#FFFFFF' }}
            />
          )}
        >
          <View tabLabel="Nổi bật" style={{ flex: 1 }}>
            <Card />
          </View>
          <View tabLabel="Top" style={{ flex: 1 }}>
            <Top />
          </View>
          <View tabLabel="Khuyến mại" style={{ flex: 1 }}>
            <Text>C</Text>
          </View>
          <View tabLabel="Bộ sưu tập" style={{ flex: 1 }}>
            <Text>D</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
