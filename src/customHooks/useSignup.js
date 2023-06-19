/* eslint-disable prettier/prettier */
// import { View, Text } from 'react-native'
import React, { useState } from 'react';
const useSignup = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isError, setIsError] = useState(false);
    const [password, setPassword] = useState('')
    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };
    const goToLogin = () => {
        console.warn('go to login page');
    }
    const goToVerification = () => {
        console.warn('go to verfication page');
    }
    return {
        email,
        setEmail,
        fullName,
        setFullName,
        dob,
        setDob,
        phoneNumber,
        setPhoneNumber,
        isError,
        setIsError,
        password,
        setPassword,
        goToLogin,
        goToVerification,
    };
};

export default useSignup;
