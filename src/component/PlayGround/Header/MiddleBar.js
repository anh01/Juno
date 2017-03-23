import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const back = require('../../../media/back.png');
const forward = require('../../../media/forward.png');

export default class BottomHeader extends Component {
    render() {
        const { 
            secondBar, btnBack, btnForward, 
            daytime, txtDay, txtTime 
        } = styles;
        return (
            <View style={secondBar}>
                <Image source={back} style={btnBack} />
                <View style={daytime}>
                    <Text style={txtDay}>February</Text>
                    <Text style={txtTime}>2015</Text>
                </View>
                <Image source={forward} style={btnForward} />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    secondBar: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        paddingTop: 30,
        marginHorizontal: 30
    },
    btnBack: {
        width: width / 20,
        height: width / 20
    },
    btnForward: {
        width: width / 20,
        height: width / 20
    },
    daytime: {
    },
    txtDay: {
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'Avenir'
    },
    txtTime: {
        alignSelf: 'center',
        color: '#CBCDC6',
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    }
});
