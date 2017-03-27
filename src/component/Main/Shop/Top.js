import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// const { width, height } = Dimensions.get('window');

class Top extends Component {
    toDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'DETAIL' });
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={this.toDetail.bind(this)}>
                    <Text>To Detail</Text>
                </TouchableOpacity>
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

module.exports = connect(state => ({ navigator: state.nav }))(Top);
