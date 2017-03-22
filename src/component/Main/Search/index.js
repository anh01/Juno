import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Search Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#556478',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
