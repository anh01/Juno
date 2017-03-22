import React, { Component } from 'react';
import { 
    View, StyleSheet, TouchableOpacity,
    Image, Dimensions, TextInput 
} from 'react-native';

const { width } = Dimensions.get('window');
const cartImage = require('../../media/navIcon/cart.png');
const logoImage = require('../../media/navIcon/cart.png');

export default class BottomNav extends Component {
  render() {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.control}>
                <Image 
                    source={cartImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.control}>
                <Image 
                    source={logoImage}
                />
            </TouchableOpacity>
            <View style={styles.viewInput}>
                <TextInput style={styles.textInput} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width,
    paddingTop: 30,
    backgroundColor: '#C8C8C8'
  },
  textInput: {
      height: 30,
      backgroundColor: '#F5F5F5'
  },
  logo: {
      flex: 4
  },
  control: {
      flex: 4
  },
  viewInput: {
      flex: 8,
      marginRight: 10
  }
});
