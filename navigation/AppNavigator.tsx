import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SingInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'AuthLoading',
}));