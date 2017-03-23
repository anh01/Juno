import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// const { width, height } = Dimensions.get('window');

export default class Top extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.text}>Pho</Text>
          </View>
      </View>
    );
  }
}

/* 
    justifyContent: Main axis 
    alignItems: Cross axis
*/

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#C094AB',
    },
    header: {
        width: 100,
        backgroundColor: '#002A37',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    text: {
        alignSelf: 'center'
    }   
});
