import React, {Component} from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
// import AppNavigator from './src/routes'
import Routes from './Routes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from 'react-native-splash-screen'
// const AppIndex = createAppContainer(AppNavigator)
const AppIndex = createAppContainer(Routes)


export default class App extends Component {
   componentDidMount() {
     SplashScreen.hide();
   }
  render() {
    return (
      <View style={styles.wrapper}>
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
