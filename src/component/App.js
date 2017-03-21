import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Main from './Main';
import Menu from './Menu';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SideMenu menu={<Menu />}>
                    <Main />
                </SideMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDFDD2'
    }
});
