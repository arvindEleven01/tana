import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './store/store'
import SplashScreen from 'react-native-splash-screen'


class App extends Component {
     componentDidMount() {
       SplashScreen.hide();
     }
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider >
        );
    };
}

export default App;