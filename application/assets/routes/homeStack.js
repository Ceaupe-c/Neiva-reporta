import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../../screens/WelcomeScreen";
import LogInScreen from "../../screens/LogInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import RestoreScreen from "../../screens/RestoreScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
  },
  LogIn: {
    screen: LogInScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  Restore: {
    screen: RestoreScreen,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(HomeStack);
