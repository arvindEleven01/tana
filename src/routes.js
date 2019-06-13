import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './pages/Home'
import Location from './pages/Location'
import Events from './pages/Events'
import Contacts from './pages/Contacts'


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = SimpleLineIcons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home`;
  } else if (routeName === 'Contacts') {
    iconName = `phone`;
  } else if (routeName === 'Location') {
    iconName = `location-pin`;
  } else if (routeName === 'Events') {
    // iconName = `ios-options${focused ? '' : '-outline'}`;
    iconName = `calendar`;
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default AppNavigator = createBottomTabNavigator(
    {
      Home: { screen: Home },
      Contacts: { screen: Contacts },
      Location: { screen: Location },
      Events: { screen: Events }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        initialRouteName: 'Home',
        activeTintColor: '#f44336',
        inactiveTintColor: 'grey',
        style: {
          backgroundColor: '#fff',
          height: 60,
          paddingVertical: 5,
          borderTopColor: '#fff'
        },
        labelStyle: {
          fontSize: 12,
          lineHeight: 20
        }
      },
      animationEnabled: true,
      swipeEnabled: true
    }
  )