import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Notification Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#EB2F37',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
