import React, { Component } from 'react';
import { 
    View, StyleSheet, TouchableOpacity,
    Image, Dimensions, TextInput,
    Text 
} from 'react-native';

const { width } = Dimensions.get('window');
const logo = require('../../media/logo.png');
const menuIcon = require('../../media/ic_menu.png');

export default class BottomNav extends Component {
  render() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.rowOne}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image 
                        source={menuIcon} 
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.textLogo}>Khoa Pham</Text>
                </View>
                <Image 
                    source={logo}
                    style={styles.logo}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TextInput 
                    style={styles.input} 
                    placeholder='What do you want to buy?'
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#7D59C8',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    rowOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    input: {
        height: 30,
        width: width - 30,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10
    },
    menuIcon: {
        width: 30,
        height: 30
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    textContainer: {
        justifyContent: 'center',
        paddingLeft: 10
    },
    textLogo: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
