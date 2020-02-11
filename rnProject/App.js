import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TransitionPresets} from 'react-navigation-stack';

import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Settings from './src/screens/Settings/Settings';
import Home from './src/screens/Home/Home';
import Users from './src/screens/Users/Users';
import Temp from './src/screens/Temp/Temp';
import Temp1 from './src/screens/Temp1/Temp1';
import CustomDrawer from './src/components/CustomDrawer/CustomDrawer';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import HomeIcon from './src/assets/icons/home.svg';
import PersonIcon from './src/assets/icons/person.svg';
import SettingsIcon from './src/assets/icons/settings.svg';
import MenuIcon from './src/assets/icons/menu.svg';
import Modal from './src/screens/Modal/Modal';

const TopNavigator = createMaterialTopTabNavigator({
  Settings: Settings,
  Temp: Temp,
  TempOne: Temp1,
});

const drawerNavigationOptions = ({navigation}) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <MenuIcon height={30} width={30} fill="#fff" />
        </TouchableOpacity>
      );
    },
  };
};

const defaultOptions = () => {
  return {
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
  };
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: drawerNavigationOptions,
    },
    Temp: Temp,
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

const UsersStack = createStackNavigator(
  {
    Users: {
      screen: Users,
      navigationOptions: drawerNavigationOptions,
    },
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: TopNavigator,
      navigationOptions: drawerNavigationOptions,
    },
  },
  {
    defaultNavigationOptions: defaultOptions,
  },
);

const AppTabNav = createBottomTabNavigator(
  {
    Home: HomeStack,
    Users: UsersStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return <HomeIcon width={30} height={30} fill={tintColor} />;
        } else if (routeName === 'Users') {
          return <PersonIcon width={30} height={30} fill={tintColor} />;
        } else {
          return <SettingsIcon width={30} height={30} fill={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const Auth = createStackNavigator(
  {
    Login: Login,
    Register: Register,
  },
  {},
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: AppTabNav,
  },
  {
    contentComponent: CustomDrawer,
    drawerPosition: 'right',
  },
);

const ModalStack = createStackNavigator(
  {
    Home: DrawerNavigator,
    Modal: Modal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const AppNavigation = createSwitchNavigator({
  Splash: SplashScreen,
  Auth: Auth,
  App: ModalStack,
});

export default createAppContainer(AppNavigation);

// import React from 'react';
// import {View} from 'react-native';
// import Login from './src/screens/Login/Login';
// import Register from './src/screens/Register/Register';
// import ThemContext from './src/context/themeContext';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <ThemContext>
//           <View style={{flex: 1}}>
//             <Register />
//           </View>
//         </ThemContext>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// // import React from 'react';
// // import {SafeAreaView, View, PixelRatio} from 'react-native';
// // import Image from 'react-native-fast-image';
// // import engaged from './assets/images/engaged/engaged.png';

// // const App = () => {
// //   return (
// //     <SafeAreaView
// //       style={{
// //         flexDirection: 'row',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: 'blue',
// //         flex: 1,
// //       }}>
// //       <Image
// //         source={{
// //           uri:
// //             'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
// //           priority: Image.priority.high,
// //         }}
// //         style={{
// //           height: PixelRatio.getPixelSizeForLayoutSize(60),
// //           width: PixelRatio.getPixelSizeForLayoutSize(60),
// //         }}
// //         onLoadEnd={() => {
// //           console.warn('high priority');
// //         }}
// //       />
// //       <Image
// //         source={{
// //           uri:
// //             'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
// //           priority: Image.priority.low,
// //         }}
// //         style={{
// //           height: PixelRatio.getPixelSizeForLayoutSize(60),
// //           width: PixelRatio.getPixelSizeForLayoutSize(60),
// //         }}
// //         onLoadEnd={() => {
// //           console.warn('low priority');
// //         }}
// //       />
// //       <Image
// //         source={{
// //           uri:
// //             'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
// //           priority: Image.priority.normal,
// //         }}
// //         style={{
// //           height: PixelRatio.getPixelSizeForLayoutSize(60),
// //           width: PixelRatio.getPixelSizeForLayoutSize(60),
// //         }}
// //         onLoadEnd={() => {
// //           console.warn('normal priority');
// //         }}
// //       />
// //       <Image
// //         source={{
// //           uri:
// //             'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
// //         }}
// //         style={{
// //           height: PixelRatio.getPixelSizeForLayoutSize(60),
// //           width: PixelRatio.getPixelSizeForLayoutSize(60),
// //         }}
// //       />
// //       <View style={{height: 100, width: 100, backgroundColor: 'red'}} />
// //       <View style={{height: 100, width: 100, backgroundColor: 'yellow'}} />
// //     </SafeAreaView>
// //   );
// // };

// // export default App;
