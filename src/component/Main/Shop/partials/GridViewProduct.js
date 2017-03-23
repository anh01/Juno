import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class GridViewProduct extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.child}>
                    <Text>Nothing</Text>
                </View>
            </View>
        );
    }
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        height: height / 4,
        backgroundColor: '#002A37',
        flexWrap: 'wrap'
    },
    child: {
        backgroundColor: '#AFD0DB',
        flex: 1
    }
});
