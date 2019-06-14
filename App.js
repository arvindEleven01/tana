import React, {Component} from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
// import AppNavigator from './src/routes'
import Routes from './Routes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const AppIndex = createAppContainer(AppNavigator)
const AppIndex = createAppContainer(Routes)


export default class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        {/* <StatusBar
          backgroundColor='#000'
          barStyle= 'default'
        />
        <View style={styles.header}>
          <MaterialIcons name='live-tv' size={28} color='#f44336'/>
        </View>
        <AppIndex/>   */}
        <AppIndex />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
