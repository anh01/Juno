import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Nav from './BottomNav';
import Top from './Top';

import Account from './Account';
import Cart from './Cart';
import Shop from './Shop';
import Notification from './Notification';
import Search from './Search';

const getComponent = (name) => {
  switch (name) {
    case 'ACCOUNT': return <Account />;
    case 'CART': return <Cart />;
    case 'SEARCH': return <Search />;
    case 'NOTIFICATION': return <Notification />;
    default: return <Shop />;
  }
};

class Main extends Component {
  render() {
    const { tab } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <Top open={this.props.open} />
        </View>
        <View style={styles.body}>
          { getComponent(tab) }
        </View>
        <View style={styles.nav}>
          <Nav />
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#D8D8D8',
    height, 
    width
  },
  top: {
    width,
    height: (3 * height) / 20
  },
  nav: {
    height: height / 10,
    justifyContent: 'flex-end',
  },
  body: {
    height: 15 * (height / 20),
    justifyContent: 'flex-start'
  }
});

module.exports = connect(state => ({ tab: state.tab }))(Main);
