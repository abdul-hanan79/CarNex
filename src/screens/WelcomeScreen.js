/* eslint-disable prettier/prettier */
import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import MainButton from '../components/Button/MainButton';
import styles from './Screens.styles';
const WelcomeScreen = ({ navigation }) => {
    const goToLogin = () => {
        navigation.navigate('LoginScreen');
    };
    return (

        <ImageBackground source={require('../assests/images/welcomeScreen.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Rent & Hire a Car with ease. We have wide range of cars at affordable prices</Text>
                <View style={styles.buttonContainer}>
                    <MainButton title="Continue" onPress={goToLogin} />
                </View>
            </View>
        </ImageBackground >
    );
};

export default WelcomeScreen;

