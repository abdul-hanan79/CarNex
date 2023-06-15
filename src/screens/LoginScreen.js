/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react'
import MainButton from '../components/Button/MainButton';
import { Input } from '@rneui/themed';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Screens.styles';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../colors';

const LoginScreen = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isError, setIsError] = useState(false);
    const handleScreenPress = () => {
        Keyboard.dismiss();
    };
    return (
        <View style={[styles.container,{backgroundColor:'white'}]}>
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
                        leftIcon={
                            <FontAwesomeIcon name="glass" size={30} color="blue" />
                        }
                        placeholder="Email"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                    />


                    <Input
                        leftIcon={
                            <FontAwesomeIcon name="glass" size={30} color="blue" />

                        }
                        placeholder='Password'
                        secureTextEntry={true}
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                    />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            {/* <Input placeholder="Password" secureTextEntry={true} /> */}
            <MainButton title="Login" />
            <View style={styles.credentialLinks}>
                <Text>Forogt Password?</Text>
                <Text>Register</Text>

            </View>
            {/* <FontAwesomeIcon name="rowing" size={30} color="blue" /> */}

        </View>
    )
}

export default LoginScreen