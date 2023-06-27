/* eslint-disable prettier/prettier */
// import { View, Text } from 'react-native'
import React, { useState } from 'react';
const useSignup = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isError, setIsError] = useState(false);
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [passwordMessage, setPasswordMessage] = useState('')
    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };
    const goToLogin = (navigation) => {
        navigation.navigate("LoginScreen")
    };
    const goToVerification = () => {
        console.warn('go to verfication page');
    };
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    };
    const showConfirmPasswordHandler = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const clearInputFieldHandler = (setItem) => {
        setItem('');
    };
    const comparePassword = () => {
        console.log("value of password", password)
        console.log("type of password", typeof (password))

        console.log("value of confirm password", confirmPassword)
        console.log("type of  confirm password", typeof (confirmPassword))

        if (password == confirmPassword) {
            console.log("if is running");
            setPasswordMessage("password matched");
        }
        else {
            console.log("else is running");
            setPasswordMessage("password not matched")
        }

    };
    return {
        email,
        setEmail,
        fullName,
        setFullName,
        CNIC,
        setCNIC,
        phoneNumber,
        setPhoneNumber,
        confirmPassword,
        setConfirmPassword,
        isError,
        setIsError,
        password,
        setPassword,
        showPassword,
        showConfirmPassword,
        passwordMessage,
        goToLogin,
        goToVerification,
        showPasswordHandler,
        showConfirmPasswordHandler,
        clearInputFieldHandler,
        comparePassword,

    };
};

export default useSignup;
