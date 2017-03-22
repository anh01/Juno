import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Account extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Account Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#313131',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
