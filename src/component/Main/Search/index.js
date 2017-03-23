import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const sp1 = require('../../../media/productImage/sp1.jpg');
const sp2 = require('../../../media/productImage/sp2.jpg');
const tin1 = require('../../../media/productImage/sp3.jpg');

export default class Search extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView} horizontal={false}>
        <View style={styles.listProduct}>
          <Text style={styles.title}>DANH SÁCH SẢN PHẨM</Text>
          <View style={styles.mainListProduct}>
            {/*San pham 1*/}
            <View style={styles.product}>
              <Image style={styles.productImage} source={sp1} />
              <View style={styles.productFooter}>
                <Text style={styles.productName}>Giày cao gót 5cm mũi nhọn quai hậu</Text>
                <Text style={styles.productPrice}>430,000 VND</Text>
              </View>
            </View>

            {/*San pham 2*/}

            <View style={styles.product}>
              <Image style={styles.productImage} source={sp2} />
              <View style={styles.productFooter}>
                <Text style={styles.productName}>Giày cao gót 5cm mũi nhọn quai hậu</Text>
                <Text style={styles.productPrice}>430,000 VND</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={styles.listNews}>
          <View style={styles.newsHeader}>
            <Text style={styles.title}>TIN THỜI TRANG</Text>
          </View>
          <View style={styles.mainListNews}>
            <View style={styles.news}>
              <View style={styles.imageNewContainer}>
                <Image source={tin1} style={styles.imageNews} />
              </View>
              <View>
                <Text>Áo ngực - Bí mật điệu đà của phái đẹp trong mùa đông</Text>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  scrollView: {
    width
  },
  listProduct: {
  },
  title: {
    padding: 10,
    color: '#969696',
    fontWeight: 'bold'
  },
  mainListProduct: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
  },
  product: {
    width: (width / 2) - 10,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    shadowColor: '#D9D9D9',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3
    }
  },
  productImage: {
    width: (width / 2) - 30,
    height: (width / 2) - 30,
    borderRadius: 2,
    borderColor: '#F6F6F6',
    borderWidth: 1
  },
  productFooter: {
    marginTop: 20
  },
  productName: {
    color: '#989898',
    paddingBottom: 5
  },
  productPrice: {
    color: '#C92A62',
    fontWeight: '500'
  },
  listNews: {

  },
  mainListNews: {

  },
  imageNewContainer: {

  },
  imageNews: {

  }
});
