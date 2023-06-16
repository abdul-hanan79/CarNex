/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainButton from '../components/Button/MainButton';
import styles from './Screens.styles';
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Pressable } from 'react-native';
import { colors } from '../colors';
import useSignup from '../customHooks/useSignup';
import useLogin from '../customHooks/useLogin';
// import PhoneInput from 'react-native-phone-input';

const SignupScreen = () => {
    const { email, setEmail, fullName, setFullName, dob, setDob, phoneNumber, setPhoneNumber, isError, setIsError, handlePhoneNumberChange } = useSignup();
    const { handleScreenPress } = useLogin();
    return (
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            {/* <TextInput
    style={styles.inputBox}
    value={email}
    onChangeText={onChangeEmail}
    placeholder={'email'}
    keyboardType={'email-address'}
  /> */}
            <Text style={[styles.title, { color: colors.text }]}>Sign Up</Text>

            <TouchableWithoutFeedback onPress={handleScreenPress}>
                <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" >
                    <Input
                        value={fullName}
                        onChangeText={setFullName}
                        leftIcon={
                            <Icon name="user" size={30} color="black" />

                        }
                        placeholder="Full Name"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                    />
                    <Input
                        value={email}
                        onChangeText={setEmail}
                        leftIcon={
                            <Icon name="envelope" size={30} color="black" />

                        }
                        placeholder="Email"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                    />
                    <Input
                        value={dob}
                        onChangeText={setDob}
                        leftIcon={
                            <Icon name="calendar" size={30} color="black" />

                        }
                        placeholder="Date of Birth"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                        editable={false} // Disable direct text input
                    />
                    {/* <PhoneInput
                        ref={(ref) => {
                            this.phone = ref;
                        }}
                        onPressFlag={() => this.phone.selectCountry()}
                        onChangePhoneNumber={handlePhoneNumberChange}
                    /> */}

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            {/* <Input placeholder="Password" secureTextEntry={true} /> */}
            <MainButton title="Login " />
            <View style={styles.credentialLinks}>
                <Pressable >
                    <Text> Forogt Password?</Text>
                </Pressable>

                <Pressable onPress>
                    <Text>Register</Text>
                </Pressable>


            </View>
            {/* <FontAwesomeIcon name="rowing" size={30} color="blue" /> */}

        </View>
    )
}

export default SignupScreen;

