import React, {Component} from 'react';
import { StyleSheet, Text, View,YellowBox } from 'react-native';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './src/routes'

const AppIndex = createAppContainer(AppNavigator)

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppIndex />  
      </View>
    )
  }
}

