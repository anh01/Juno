import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Provider } from 'react-redux';

import Main from './Main';
import Menu from './Menu';
import store from '../redux/store';
import Shop from './Main/Shop';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <SideMenu menu={<Menu />}>
                        <Main />
                    </SideMenu>
                </View>
            </Provider>
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

/*export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Shop />
            </Provider>
        );
    }
}*/
