/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
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
        {/* This button's color will now be the default iOS / Android blue. */}
        {/* <Button title="My Button" /> */}
        {/* <Text>Find and rental car in easy steps</Text> */}
        {/* <WelcomeScreen/> */}
        <LoginScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
