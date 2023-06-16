/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import StackNavigator from './src/navigation/StackNavigator';
import SignupScreen from './src/screens/SignupScreen';
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
        <SignupScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
