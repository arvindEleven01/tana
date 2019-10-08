// import React, {Component} from 'react';
// import { StatusBar, StyleSheet, View } from 'react-native';
// import {createAppContainer} from 'react-navigation'
// // import AppNavigator from './src/routes'
// import Routes from './Routes'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import SplashScreen from 'react-native-splash-screen'
// // const AppIndex = createAppContainer(AppNavigator)
// const AppIndex = createAppContainer(Routes)


// export default class App extends Component {
//    componentDidMount() {
//      SplashScreen.hide();
//    }
//   render() {
//     return (
//       <View style={styles.wrapper}>
//         <AppIndex />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1
//   } 
// })

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './src/store/store'

// const AppIndex = createAppContainer(Routes)


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider >
        );
    };
}

export default App;