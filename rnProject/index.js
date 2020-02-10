/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Application, {a, b} from './App';
import {name as appName} from './app.json';

console.warn(a);
console.warn(b);

AppRegistry.registerComponent(appName, () => Application);
