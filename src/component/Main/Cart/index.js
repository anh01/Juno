import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Cart Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#5B6CF9',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
