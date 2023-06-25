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
import InputFieldShadow from '../components/InputFieldShadow/InputFieldShadow';
// import PhoneInput from 'react-native-phone-input';

const SignupScreen = () => {
    const { email, setEmail, fullName, setFullName, CNIC,
        setCNIC, phoneNumber, confirmPassword,
        setConfirmPassword, setPhoneNumber, showPassword,
        showConfirmPassword, isError, setIsError, showPasswordHandler,
        showConfirmPasswordHandler, handlePhoneNumberChange, clearInputFieldHandler, goToLogin, password, setPassword, goToVerification } = useSignup();
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
                <KeyboardAvoidingView style={[styles.inputContainer, { gap: 20, justifyContent: 'center', alignItems: 'center' }]} behavior="padding" >
                    <InputFieldShadow input={<Input
                        value={fullName}
                        onChangeText={setFullName}
                        leftIcon={
                            <Icon name="user" size={30} color="black" />

                        }
                        rightIcon={<Icon name="close" size={20} onPress={() => clearInputFieldHandler(setFullName)} />}

                        placeholder="Full Name"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                    />} />
                    <InputFieldShadow input={<Input
                        value={email}
                        onChangeText={setEmail}
                        leftIcon={
                            <Icon name="envelope" size={30} color="black" />

                        }

                        // inputStyle={{ borderBottomWidth: 1,borderBottomColor:'red' }}
                        rightIcon={<Icon name="close" size={20} onPress={() => clearInputFieldHandler(setEmail)} />}
                        placeholder="Email"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                    />} />
                    <InputFieldShadow input={<Input
                        value={CNIC}
                        onChangeText={setCNIC}
                        leftIcon={
                            <Icon name="id-card-o" size={30} color="black" />

                        }
                        rightIcon={<Icon name="close" size={20} onPress={() => clearInputFieldHandler(setCNIC)} />}

                        placeholder="CNIC"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                    // editable={false} // Disable direct text input
                    />} />
                    <InputFieldShadow input={<Input
                        value={password}
                        onChangeText={setPassword}
                        leftIcon={
                            <Icon name="lock" size={30} color="black" />
                        }
                        rightIcon={<Icon name={showPassword ? "eye" : "eye-slash"} size={20} onPress={showPasswordHandler} />}
                        placeholder="Password"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                        // editable={false} 
                        secureTextEntry={showPassword ? false : true}

                    />} />
                    <InputFieldShadow input={<Input
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        leftIcon={
                            <Icon name="lock" size={30} color="black" />
                        }
                        rightIcon={<Icon name={showConfirmPassword ? 'eye' : 'eye-slash'} size={20} onPress={showConfirmPasswordHandler} />}


                        placeholder="Confirm Password"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '100%' }}
                        // editable={false} // Di
                        secureTextEntry={showConfirmPassword ? false : true}

                    />} />

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
            <MainButton title="Signup " onPress={goToVerification} />
            <View style={styles.credentialLinks}>
                <Pressable onPress={goToLogin} >
                    <Text > Registered Already? <Text style={{ textDecorationLine: 'underline' }}>Login</Text></Text>
                </Pressable>



            </View>
            {/* <FontAwesomeIcon name="rowing" size={30} color="blue" /> */}

        </View >
    )
}

export default SignupScreen;

