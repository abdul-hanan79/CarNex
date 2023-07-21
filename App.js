/* eslint-disable prettier/prettier */
import { Platform, View } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import TabNavigator from './src/navigation/TabNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView, StatusBar, } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
// import DrawerNavigator from './src/navigation/DrawerNavigator';


const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});
// what is your name my name is abdul hanan now what is your name?
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, paddingLeft: 10, paddingRight: 10, }}>
      <SafeAreaView style={{
        flex: 1,
        marginTop: 0,
      }}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>

            
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView >
  );
};
export default App;
