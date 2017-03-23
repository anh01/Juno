import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const menu = require('../../../media/ic_menu.png');
const userIcon = require('../../../media/profile_icon.png');

export default class PlayGround extends Component {
    render() {
        const { topBar, menuIconStyle, userIconStyle } = styles;
        return (
            <View style={topBar}>
                <Image source={menu} style={menuIconStyle} />
                <Image source={userIcon} style={userIconStyle} />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    topBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 0
    },
    userIconStyle: {
        width: width / 15,
        height: width / 15
    },
    menuIconStyle: {
        width: width / 15,
        height: width / 15
    }
});
