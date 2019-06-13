import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Register from './src/pages/Register'
import DashboardTabRoutes from "./src/routes";
import CustomHeader from "./src/CustomHeader";
import HeaderStyles from "./headerStyles";

const Routes = createStackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: "Register",
      header: props => <CustomHeader {
        ...props}
      />
    }
  },
  Dashboard: {
    screen: DashboardTabRoutes,
    navigationOptions: {
      header: null
    }
  }
}, {
    initialRouteName: "Register",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true
    }
})

export default Routes
