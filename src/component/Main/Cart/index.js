import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const sp = require('../../../media/productImage/sp2.jpg');
const heart = require('../../../media/like.png');
const cart = require('../../../media/cart.png');

export default class ProductDetail extends Component {
  render() {
    const { 
      wrapper, cardStyle, header, 
      footer, heartStyle, productStyle,
      imageContainer, cartStyle, textBlack,
      textSmoke, textHighlight, textMain, titleContainer,
      descContainer, descStyle, endStyle, linkStyle 
    } = styles;
    return (
      <View style={wrapper}>
        <View style={cardStyle}>
          <View style={header}>
            <Image style={heartStyle} source={heart} />
            <Image style={cartStyle} source={cart} />
          </View>
          <View style={imageContainer}>
            <Image style={productStyle} source={sp} />
          </View>
          <View style={footer}>
            <View style={titleContainer}>
              <Text style={textMain}>
                <Text style={textBlack}>Corella</Text>
                <Text style={textHighlight}> / </Text>
                <Text style={textSmoke}>Vedella</Text>
              </Text> 
            </View> 
            <View style={descContainer}>
              <Text style={descStyle}>
                This is a man bag. For man who real, 100% man, if you are a man, who love fashion, you must buy it and have it in your collection. If you are not man, You still need to buy it, to prove others, you are a man!
              </Text>
              <Text style={endStyle}>
                For more infomation, click <Text style={linkStyle}>khoapham.vn</Text>
              </Text>
            </View>
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
    alignItems: 'stretch',
    backgroundColor: '#CFDFDC',
  },
  cardStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    flex: 1
  },
  cartStyle: {
    width: 40,
    height: 40
  },
  heartStyle: {
    width: 35,
    height: 35
  },
  productStyle: {
    width: width / 2,
    height: width / 2
  },
  footer: {
    flex: 4
  },
  imageContainer: {
    flex: 4,
    alignItems: 'center'
  },
  textMain: {
    paddingLeft: 20,
  },
  textBlack: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F3F46'
  },
  textSmoke: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#9A9A9A'
  },
  textHighlight: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#7D59C8'
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#F6F6F6',
    marginHorizontal: 20,
    paddingBottom: 5
  },
  descContainer: {
    margin: 10,
    paddingTop: 10
  },
  descStyle: {
    color: '#AFAFAF'
  },
  endStyle: {
    color: '#AFAFAF',
    paddingTop: 10
  },
  linkStyle: {
    color: '#7D59C8'
  }
});
