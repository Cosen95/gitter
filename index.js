import { AppRegistry } from 'react-native';
import App from './App';
// import { AppStackNavigator, AppSwitchNavigator } from './navigators/AppNavigator';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/navigator/AppNavigator';
const AppStackNavigatorContainer = createAppContainer(AppNavigator);

AppRegistry.registerComponent('gitter', () => AppStackNavigatorContainer);
