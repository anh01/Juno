import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class BottomHeader extends Component {
    render() {
        const { title, num, iconColor } = this.props;
        const { footerLeft, smallColor, footerLine, footerRight, titleStyle } = styles;
        return (
            <View style={footerLine}>
                <View style={footerLeft}>
                    <View style={[smallColor, { backgroundColor: iconColor }]}></View>
                    <Text style={titleStyle}>{title}</Text>
                </View>
                <View style={footerRight}>
                    <Text>{num}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerLine: {
        flex: 1,
        marginTop: 3,
        marginHorizontal: 2,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#BFBEC3',
        shadowColor: '#D9D9D9',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 2
        }
    },
    footerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerRight: {
        justifyContent: 'center',
        paddingRight: 30
    },
    smallColor: {
        width: 15,
        height: 15,
        margin: 20
    },
    titleStyle: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#B3B0AF',
        fontWeight: '500'
    }
});
