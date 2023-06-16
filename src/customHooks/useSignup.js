/* eslint-disable prettier/prettier */
// import { View, Text } from 'react-native'
import React, { useState } from 'react';
const useSignup = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isError, setIsError] = useState(false);
    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };
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
    }
}

export default useSignup;