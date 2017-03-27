import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import Card from './partials/Card';
import Top from './Top';

class MainView extends Component {
    componentDidMount() {
        const { dispatch, navigator } = this.props;
        dispatch({ type: 'SET_NAVIGATOR', nav: navigator });
    }
    openMenu() {
        const { navigator } = this.props;
        navigator.push({ name: 'DETAIL' });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollableTabView
                renderTabBar={() => (
                    <DefaultTabBar
                        backgroundColor='#7D59C8'
                        inactiveTextColor='#E4DDF4'
                        activeTextColor='#FFFFFF'
                        underlineStyle={{ backgroundColor: '#FFFFFF' }}
                    />
                )}
                >
                <View tabLabel="Nổi bật" style={{ flex: 1 }}>
                    <Card />
                </View>
                <View tabLabel="Top" style={{ flex: 1 }}>
                    <Top />
                </View>
                <View tabLabel="Khuyến mại" style={{ flex: 1 }}>
                    <Text>C</Text>
                </View>
                <View tabLabel="Bộ sưu tập" style={{ flex: 1 }}>
                    <Text>D</Text>
                </View>
                </ScrollableTabView>
                <TouchableOpacity onPress={this.openMenu.bind(this)}>
                    <Text>Open</Text>
                </TouchableOpacity>
            </View>
        );
    }    
}

module.exports = connect()(MainView);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  detailContainer: {
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
