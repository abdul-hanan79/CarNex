/* eslint-disable prettier/prettier */
import { View, Text, Pressable } from 'react-native';
import React from 'react';
// import { useState } from 'react'
import MainButton from '../components/Button/MainButton';
import { Input } from '@rneui/themed';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Screens.styles';
import { KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../colors';
import useLogin from '../customHooks/useLogin';

const LoginScreen = ({ navigation }) => {
    const { isError, goToSignup, goToHomeScreen, handleScreenPress,userName, setUserName, password, setPassword } = useLogin();

    return (
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            {/* <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      /> */}
            <Text style={[styles.title, { color: colors.text }]}>Login</Text>
            <TouchableWithoutFeedback onPress={handleScreenPress}>
                <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" >
                    <Input
                        value={userName}
                        onChangeText={setUserName}
                        leftIcon={
                            <Icon name="user" size={30} color="black" />

                        }
                        placeholder="Email"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                    />


                    <Input
                        value={password}
                        onChangeText={setPassword}
                        leftIcon={
                            <Icon name="lock" size={30} color="black" />

                        }
                        placeholder='Password'
                        secureTextEntry={true}
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                    />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            {/* <Input placeholder="Password" secureTextEntry={true} /> */}
            <MainButton title="Login " onPress={goToHomeScreen} />
            <View style={styles.credentialLinks}>
                <Pressable onPress={goToSignup}>
                    <Text> Forogt Password?</Text>
                </Pressable>

                <Pressable onPress={() => goToSignup(navigation)}>
                    <Text>Register</Text>
                </Pressable>


            </View>
            {/* <FontAwesomeIcon name="rowing" size={30} color="blue" /> */}

        </View>
    )
}

export default LoginScreen