import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './pages/Home'
import Location from './pages/Location'
import Events from './pages/Events'
import Event from './pages/Event'
import Contacts from './pages/Contacts'
import CustomHeader from "./CustomHeader";
import HeaderStyles from "../headerStyles";

let headerDefaultNavigationConfig = {
  header: props => <CustomHeader {...props} />,
  ...HeaderStyles
};

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

const Tab1 = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerLeft: null,
      headerTitle: "Home"
    }
  }
}, {
  defaultNavigationOptions: {
    ...headerDefaultNavigationConfig
  }
});

const Tab2 = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      headerLeft: null,
      headerTitle: "Contacts"
    }
  }
}, {
  defaultNavigationOptions: {
    ...headerDefaultNavigationConfig
  }
});

const Tab3 = createStackNavigator({
  Location: {
    screen: Location,
    navigationOptions: {
      headerLeft: null,
      headerTitle: "Location"
    }
  }
}, {
  defaultNavigationOptions: {
    ...headerDefaultNavigationConfig
  }
});

const Tab4 = createStackNavigator({
  Events: {
    screen: Events,
    navigationOptions: {
      headerLeft: null,
      headerTitle: "Events"
    }
  },
  Event: {
    screen: Event,
    navigationOptions: {
      headerTitle: "Event Details"
    }
  }
}, {
  defaultNavigationOptions: {
    ...headerDefaultNavigationConfig
  }
});

export default AppNavigator = createBottomTabNavigator(
    {
      Home: Tab1,
      Contacts: Tab2,
      Location: Tab3,
      Events: Tab4
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        const { routeName, routes } = navigation.state;
        let params = routes && routes[1] && routes[1].params;
        return {
          tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
          tabBarVisible:
            params && params.hideTabBar != null ? !params.hideTabBar : true,
          swipeEnabled:
            params && params.hideTabBar != null ? !params.hideTabBar : true
        };
      },
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