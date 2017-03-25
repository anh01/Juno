import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.props.close}>
              <Text>Close Menu</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#FFFFFF'
    }
});
