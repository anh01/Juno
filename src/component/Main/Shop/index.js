import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { connect } from 'react-redux';
import ProductDetail from '../ProductDetail';
import MainView from './MainView';

const global = require('../../../global');

class Shop extends Component {
  renderScene(route, nav) {
    global.navigator = nav;
    console.log('nav: ' + nav);
    if (route.name === 'DETAIL') return <ProductDetail />;
    return <MainView navigator={nav} />;
  }

  render() {
    return (
      <Navigator 
        initialRoute={{ name: 'ALL' }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

module.exports = connect(state => ({ navigator: state.navigator }))(Shop);
