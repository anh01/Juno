import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class AnButton extends Component {
    render() {
        const { onPress, source } = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={source}
                />
            </TouchableOpacity>
        );
    }
}
