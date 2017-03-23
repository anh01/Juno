import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class BottomHeader extends Component {
    render() {
        const { thirdBar } = styles;
        return (
            <View style={thirdBar}>
                <Text>Third bar</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thirdBar: {
        flex: 6,
        backgroundColor: 'transparent'
    }
});
