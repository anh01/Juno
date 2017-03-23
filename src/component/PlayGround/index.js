import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default class PlayGround extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
                <Header />
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.7
    }
});
