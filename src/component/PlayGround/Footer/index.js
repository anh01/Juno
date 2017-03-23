import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import FooterLine from './FooterLine';

export default class Header extends Component {
    render() {
        const { footer } = styles;
        return (
            <View style={footer}>
                <FooterLine num='108' title='Complete' iconColor='#50D1C4' />
                <FooterLine num='92' title='Overdue' iconColor='#FFA952' />
                <FooterLine num='31' title='Snoozed' iconColor='#BA76FF' />
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        height: height / 3,
        width,
        backgroundColor: '#EBEBEB',
        justifyContent: 'space-between'
    }
});
