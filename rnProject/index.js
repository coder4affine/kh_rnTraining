/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Application, {a, b} from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login/Login';

console.warn(a);
console.warn(b);

AppRegistry.registerComponent(appName, () => Login);
