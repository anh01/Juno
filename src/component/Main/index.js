import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
        <View style={styles.mainContainer}>
           <Text>Main Component vv vvvvvv </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#CDCCDC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
