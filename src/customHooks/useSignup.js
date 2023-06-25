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
    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };
    const goToLogin = () => {
        console.warn('go to login page');
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
        goToLogin,
        goToVerification,
        showPasswordHandler,
        showConfirmPasswordHandler,
        clearInputFieldHandler,
    };
};

export default useSignup;
