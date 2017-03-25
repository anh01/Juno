import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Provider } from 'react-redux';
import Drawer from 'react-native-drawer';

import Main from './Main';
import Menu from './Menu';
import store from '../redux/store';

StatusBar.setHidden(true);

export default class App extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    }

    openControlPanel = () => {
        this.drawer.open();
    }

    render() {
        const normal = (
            <Provider store={store}>
                <Drawer
                    ref={ref => { this.drawer = ref; }}
                    content={<Menu close={this.closeControlPanel.bind(this)} />}
                    openDrawerOffset={0.4}
                    panCloseMask={0.2}
                >
                    <Main open={this.openControlPanel.bind(this)} />
                </Drawer>
            </Provider>
        );
        return normal;
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
