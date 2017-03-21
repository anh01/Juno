import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/component/App';

export default class Juno extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Juno', () => Juno);
