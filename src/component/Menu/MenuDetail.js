import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MenuDetail extends Component {
  render() {
    return (
        <TouchableOpacity 
            onClick={() => console.log('item clicked')}
            style={styles.button}
        >
            <Text>{this.props.text}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DDFDD2',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00AF5E'
    }
});
