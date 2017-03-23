import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const sp4 = require('../../../media/productImage/sp5.jpg');

export default class ProductDetail extends Component {
  render() {
    const { wrapper, header, imageWrapper, image, cart, code, codeContainer, titleCenter } = styles;
    return (
      <View style={wrapper}>
        <View style={cart}>
          <View style={header}>
            <View style={titleCenter}>
              <Text 
                style={{ 
                  color: '#90A2A1', 
                  fontWeight: 'bold', 
                }}
              >Giày nhung nam
            </Text>
            </View>
            <View style={codeContainer}>
              <Text style={code}>NGN003</Text>
            </View>
          </View>
          <View style={imageWrapper}>
            <Image source={sp4} style={image} />
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  cart: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    margin: 10,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderColor: '#E6E5E6',
    shadowColor: '#BEBEBE',
    shadowOffset: {
      width: 3
    },
    shadowOpacity: 0.3
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#E6E5E6',
    marginBottom: 10
  },
  productName: {
    fontWeight: 'bold'
  },
  imageWrapper: {
    flex: 8,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    alignSelf: 'center'
  },
  code: {
    color: '#00B3EB',
    alignSelf: 'flex-end'
  },
  codeContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingRight: 10
  },
  titleCenter: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDF3FC'
  }
});
