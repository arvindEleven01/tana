import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Home from './pages/Home'
import Events from './pages/Events'
import Location from './pages/Location'
import Contacts from './pages/Contacts'

const AppNavigator = createMaterialBottomTabNavigator({
  Home: Home,
  Events: Events,
  Location: Location,
  Contacts: Contacts
}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: {
    backgroundColor: '#f44336'
  },
})

export default AppNavigator
