import React, { Component } from 'react';
import { Navigator } from 'react-native';
import ProductDetail from '../ProductDetail';
import MainView from './MainView';

const renderScene = (route, navigator) => {
  if (route.name === 'DETAIL') return <ProductDetail />;
  return <MainView navigator={navigator} />;
};

export default class Shop extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ name: 'ALL' }}
        renderScene={renderScene}
      />
    );
  }
}
