import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Settings from './src/screens/Settings/Settings';
import Home from './src/screens/Home/Home';
import Users from './src/screens/Users/Users';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeIcon from './src/assets/icons/home.svg';
import PersonIcon from './src/assets/icons/person.svg';
import SettingsIcon from './src/assets/icons/settings.svg';

const HomeStack = createStackNavigator({
  Home: Home,
});

const UsersStack = createStackNavigator({
  Users: Users,
});

const SettingsStack = createStackNavigator({
  Settings: Settings,
});

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

const App = createStackNavigator({
  Home: Home,
  Settings: Settings,
});

const AppNavigation = createSwitchNavigator({
  Splash: SplashScreen,
  Auth: Auth,
  App: AppTabNav,
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
