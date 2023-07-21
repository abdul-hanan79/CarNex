/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import PhoneVerificationScreen from '../screens/PhoneVerificationScreen';
import HomeScreen from '../screens/HomeScreen';
import SingleCarDetail from '../components/SingleCarDetailCard/SingleCarDetailCard'
const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PhoneVerificationScreen" component={PhoneVerificationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SingleCarDetail" component={SingleCarDetail} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}
export default StackNavigator;