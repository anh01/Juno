import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollableTabView
          style={{ marginTop: 2 }}
          renderTabBar={() => <DefaultTabBar />}
        >
          <View tabLabel="Nổi bật">
            <Text>A</Text>
          </View>
          <View tabLabel="Top">
            <Text>B</Text>
          </View>
          <View tabLabel="Khuyến mại">
            <Text>C</Text>
          </View>
          <View tabLabel="Bộ sưu tập">
            <Text>D</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#00B05F',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
