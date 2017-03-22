import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import ImageButtom from './ImageButton';

const { width } = Dimensions.get('window');
const cartImage = require('../../../media/navIcon/cart.png');
const homeImage = require('../../../media/navIcon/home.png');
const notiImage = require('../../../media/navIcon/notification.png');
const searchImage = require('../../../media/navIcon/search.png');
const userImage = require('../../../media/navIcon/user.png');

class BottomNav extends Component {
    switchTab(tabName) {
        const { dispatch } = this.props;
        dispatch({ type: 'CHANGE_MAIN_TAB', name: tabName });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageButtom source={homeImage} onPress={() => this.switchTab('HOME')} />
                <ImageButtom source={searchImage} onPress={() => this.switchTab('SEARCH')} />
                <ImageButtom source={cartImage} onPress={() => this.switchTab('CART')} />
                <ImageButtom source={notiImage} onPress={() => this.switchTab('NOTIFICATION')} />
                <ImageButtom source={userImage} onPress={() => this.switchTab('ACCOUNT')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width,
    paddingVertical: 10,
    backgroundColor: '#C8C8C8'
  }
});

module.exports = connect()(BottomNav);
