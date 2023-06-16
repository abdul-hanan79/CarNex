/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Keyboard } from 'react-native';


const useLogin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const goToSignup = (navigation) => {
        navigation.navigate("SignupScreen")
    };
    const goToHomeScreen = () => {
        console.warn("go to home screen");
        console.warn(userName)
    };

    const handleScreenPress = () => {
        console.warn("this is running")
        Keyboard.dismiss();
    };
    return {
        userName,
        setUserName,
        password,
        setPassword,
        isError,
        setIsError,
        goToSignup,
        handleScreenPress,
        goToHomeScreen,
    };
};

export default useLogin;
