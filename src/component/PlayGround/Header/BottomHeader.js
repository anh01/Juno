import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const logo2 = require('../../../media/logo1.png');
const logo1 = require('../../../media/logo2.png');
const logo3 = require('../../../media/logo0.png');

export default class BottomHeader extends Component {
    render() {
        const { thirdBar, top, bottom, imageAside, imageCenter, status } = styles;
        return (
            <View style={thirdBar}>
                <View style={top}>
                    <Image source={logo1} style={imageAside} />
                    <Image source={logo2} style={imageCenter} />
                    <Image source={logo3} style={imageAside} />
                </View>
                <View style={bottom}>
                    <Text style={status}>
                        Good job, you've completed 6% more task this month'
                    </Text>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    thirdBar: {
        flex: 6,
        backgroundColor: 'transparent'
    },
    top: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    bottom: {
        flex: 2,
        width: width * 0.7,
        marginTop: 20,
        alignSelf: 'center'
    },
    imageAside: {
        width: width / 5,
        height: width / 5,
        alignSelf: 'flex-end'
    },
    imageCenter: {
        width: width / 3,
        height: width / 3
    },
    status: {
        color: '#F8F785',
        fontFamily: 'Avenir',
        fontWeight: '400',
        textAlign: 'center'
    }
});
