import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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
        <View style={styles.body}>
          <Top />
          { getComponent(tab) }
        </View>
        <View style={styles.nav}>
          <Nav />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#CDCCDC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  body: {
    flex: 10,
    justifyContent: 'flex-start'
  }
});

module.exports = connect(state => ({ tab: state.tab }))(Main);
