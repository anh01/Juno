import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProductDetail extends Component {
  render() {
    const { wrapper, header } = style;
    return (
      <View style={wrapper}>
        <View style={header}>
          <Text>Không vui mấy</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    flex: 1
  },
  body: {
    flex: 1
  }
});
