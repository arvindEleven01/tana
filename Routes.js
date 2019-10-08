// import React from 'react'
// import { createStackNavigator } from 'react-navigation'
// import Register from './src/pages/Register'
// import DashboardTabRoutes from "./src/routes";
// import CustomHeader from "./src/CustomHeader";
// import HeaderStyles from "./headerStyles";

// const Routes = createStackNavigator({
//   Register: {
//     screen: Register,
//     navigationOptions: {
//       headerTitle: "Register",
//       header: props => <CustomHeader {...props} />
//     }
//   },
//   Dashboard: {
//     screen: DashboardTabRoutes,
//     navigationOptions: {
//       header: null
//     }
//   }
// }, {
//     initialRouteName: "Register",
//     defaultNavigationOptions: {
//       ...HeaderStyles,
//       animationEnabled: true
//     }
// })

// export default Routes

import React from 'react';
import { View, ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/Auth/LoginForm';
import SignupForm from './src/components/Auth/SignUp';
import AddItem from './src/components/AppComponents/AddItem'
import VeiwItems from './src/components/AppComponents/VeiwItem'


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>

             <Scene key="auth">
                <Scene key="login" component={LoginForm} hideNavBar={true} initial />
                <Scene key="signup" component={SignupForm} hideNavBar={true} />
            </Scene> 
            <Scene key="main">
                <Scene navigationBarStyle={{ backgroundColor: '#2196F3' }} key="addItem" component={AddItem} title={"Add Item"} initial/>
                <Scene navigationBarStyle={{ backgroundColor: '#2196F3' }} key="viewItem" component={VeiwItems} title={"View Items"}  />
            </Scene>
        </Router>
    );
};


export default RouterComponent;

