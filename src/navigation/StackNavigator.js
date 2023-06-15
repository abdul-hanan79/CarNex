/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen name="WelcomeScreen" component={<WelcomeScreen />} />
            <Stack.Screen name="WelcomeScreen" component={<WelcomeScreen />} />


        </Stack.Navigator>
    )
}
export default StackNavigator;