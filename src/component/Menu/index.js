import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MenuDetail from './MenuDetail';

export default class Menu extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>FFFF</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
    }
});
