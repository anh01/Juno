import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Shop Component</Text>
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
