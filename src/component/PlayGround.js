import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

const backgroundImage = require('../media/pine.png');
const menu = require('../media/ic_menu.png');
const userIcon = require('../media/profile_icon.png');
const back = require('../media/back.png');
const forward = require('../media/forward.png');

export default class PlayGround extends Component {
    render() {
        const { 
            wrapper, image, footer, topBar, 
            header, secondBar, thirdBar,
            userIconStyle, menuIconStyle,
            btnBack, btnForward, daytime,
            txtDay, txtTime, footerLeft, 
            smallColor, footerRight, footerLine
        } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                        <Image 
                            source={backgroundImage} 
                            style={image}
                        >
                            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                                <View style={topBar}>
                                    <Image source={menu} style={menuIconStyle} />
                                    <Image source={userIcon} style={userIconStyle} />
                                </View>
                                <View style={secondBar}>
                                    <Image source={back} style={btnBack}/>
                                    <View style={daytime}>
                                        <Text style={txtDay}>February</Text>
                                        <Text style={txtTime}>2015</Text>
                                    </View>
                                    <Image source={forward} style={btnForward} />
                                </View>
                                <View style={thirdBar}>
                                    <Text>Third bar</Text>
                                </View>
                            </View>
                        </Image>
                </View>
                <View style={footer}>
                    <View style={footerLine}>
                        <View style={footerLeft}>
                            <View style={smallColor}></View>
                            <Text>Completed</Text>
                        </View>
                        <View style={footerRight}>
                            <Text>108</Text>
                        </View>
                    </View>
                    <View style={footerLine}>
                        <View style={footerLeft}>
                            <View style={smallColor}></View>
                            <Text>Completed</Text>
                        </View>
                        <View style={footerRight}>
                            <Text>108</Text>
                        </View>
                    </View>
                    <View style={footerLine}>
                        <View style={footerLeft}>
                            <View style={smallColor}></View>
                            <Text>Completed</Text>
                        </View>
                        <View style={footerRight}>
                            <Text>108</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    image: {
        width,
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.7
    },
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
    },
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
    },
    thirdBar: {
        flex: 6,
        backgroundColor: 'transparent'
    },
    header: {
        flex: 2
    },
    footer: {
        flex: 1,
        height: height / 3,
        width,
        backgroundColor: '#EBEBEB'
    },
    footerLine: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#BFBEC3',
        margin: 5,
        shadowColor: '#D9D9D9',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 3
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
        backgroundColor: '#6AC9B9',
        width: 15,
        height: 15,
        margin: 20
    }
});
