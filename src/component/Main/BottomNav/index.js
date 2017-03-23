import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import ImageButtom from './ImageButton';

const { width } = Dimensions.get('window');
const cartImage = require('../../../media/nav/cart.png');
const homeImage = require('../../../media/nav/home.png');
const notiImage = require('../../../media/nav/notification.png');
const searchImage = require('../../../media/nav/search.png');
const userImage = require('../../../media/nav/user.png');

const cartImageInactive = require('../../../media/nav/i_cart.png');
const homeImageInactive = require('../../../media/nav/i_home.png');
const notiImageInactive = require('../../../media/nav/i_notification.png');
const searchImageInactive = require('../../../media/nav/i_search.png');
const userImageInactive = require('../../../media/nav/i_user.png');

class BottomNav extends Component {
    switchTab(tabName) {
        const { dispatch } = this.props;
        dispatch({ type: 'CHANGE_MAIN_TAB', name: tabName });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageButtom 
                    activeSource={homeImage} 
                    inactiveSource={homeImageInactive}
                    tabName='SHOP'
                    onPress={() => this.switchTab('SHOP')} 
                />
                <ImageButtom 
                    activeSource={searchImage} 
                    inactiveSource={searchImageInactive}
                    tabName='CART'
                    onPress={() => this.switchTab('SEARCH')} 
                />
                <ImageButtom 
                    activeSource={cartImage} 
                    inactiveSource={cartImageInactive}
                    tabName='CART'
                    onPress={() => this.switchTab('CART')} 
                />
                <ImageButtom 
                    activeSource={notiImage} 
                    inactiveSource={notiImageInactive}
                    tabName='NOTIFICATION'
                    onPress={() => this.switchTab('NOTIFICATION')} 
                />
                <ImageButtom 
                    activeSource={userImage} 
                    inactiveSource={userImageInactive}
                    tabName='ACCOUNT'
                    onPress={() => this.switchTab('ACCOUNT')} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width,
    paddingVertical: 10,
    backgroundColor: '#7D59C8'
  }
});

module.exports = connect()(BottomNav);
