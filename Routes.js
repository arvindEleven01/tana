import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Register from './src/pages/Register'
import DashboardTabRoutes from "./src/routes";

const Routes = createStackNavigator({
  Register: { screen: Register },
  Dashboard: { screen: DashboardTabRoutes }
})

export default Routes
