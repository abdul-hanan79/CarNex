/* eslint-disable prettier/prettier */
import { Platform, View } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import PhoneVerification from './src/screens/PhoneVerificationScreen';
import HomeScreen from './src/screens/HomeScreen';
import TabNavigator from './src/navigation/TabNavigator';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/SignupScreen';
// import StackNavigator from './src/navigation/StackNavigator';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import DrawerNavigator from './src/navigation/DrawerNavigator';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1,paddingLeft:10,paddingRight:10, }}>
      <ThemeProvider theme={theme}>

        <NavigationContainer>
          <TabNavigator />
          {/* <HomeScreen/> */}
          {/* <DrawerNavigator /> */}

        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
export default App;
