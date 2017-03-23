import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class ProductDetail extends Component {
    render() {
        const { wrapper, titleProductName, titleWrapper } = styles;
        return (
            <View style={wrapper}>
                <View style={titleWrapper}>
                    <Text style={titleProductName}>Product Name</Text>
                </View>
                <View>
                    <Text>Image slider here!</Text>
                </View>
                <View>
                    <Text>A short params to desciber this product here</Text>
                </View>
                <View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {

    },
    titleProductName: {

    },
    titleWrapper: {

    }
});
