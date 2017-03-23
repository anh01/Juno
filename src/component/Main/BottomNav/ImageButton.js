import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

class AnButton extends Component {
    render() {
        const { onPress, activeSource, inactiveSource, tab, tabName } = this.props;
        const source = (tabName === tab) ? activeSource : inactiveSource;
        return (
            <TouchableOpacity onPress={onPress}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={source}
                />
            </TouchableOpacity>
        );
    }
}
module.exports = connect(state => ({ tab: state.tab }))(AnButton);
