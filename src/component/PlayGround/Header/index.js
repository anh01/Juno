import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import MiddleBar from './MiddleBar';

const backgroundImage = require('../../../media/pine.png');

export default class Header extends Component {
    
    render() {
        const { 
            image, 
            header
        } = styles;
        return (
            <View style={header}>
                <Image 
                    source={backgroundImage} 
                    style={image}
                >
                    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                        <TopHeader />
                        <MiddleBar />
                        <BottomHeader />
                    </View>
                </Image>
        </View>
        );
    }
}

const { width } = Dimensions.get('window');

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
    header: {
        flex: 2
    }
});
