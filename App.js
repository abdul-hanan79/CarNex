/* eslint-disable prettier/prettier */
import { Platform, View } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import PhoneVerification from './src/screens/PhoneVerificationScreen';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
// import StackNavigator from './src/navigation/StackNavigator';
// import WelcomeScreen from './src/screens/WelcomeScreen';

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

    <ThemeProvider theme={theme}>

      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <WelcomeScreen/> */}
        {/* <LoginScreen/> */}
        {/* <SignupScreen/> */}
        {/* <PhoneVerification /> */}
        <HomeScreen/>
      </NavigationContainer>

    </ThemeProvider>

  );
};
export default App;
