/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native'
import React from 'react'

import InputFieldShadow from '../components/InputFieldShadow/InputFieldShadow';
import { Image, Input } from '@rneui/themed';
import usePhoneVerification from '../customHooks/usePhoneVerification';
// import Icon from 'react-native-vector-icons/FontAwesome';
import MainButton from '../components/Button/MainButton';
import styles from './Screens.styles';
import { colors } from '../colors';
import useSignup from '../customHooks/useSignup';
import { ScrollView } from 'react-native';
const PhoneVerification = () => {
    const { code, setCode, isError, setIsError } = usePhoneVerification()
    const { phoneNumber } = useSignup()
    return (
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <View style={{ alignItems: 'center' }}>
                    {/* <Icon name="mobile" size={50} color="black" /> */}
                    <Image source={require('../assests/images/phoneVerification.png')}
                        style={{ width: 300, height: 300, }} />
                    <Text style={[styles.title, { color: colors.heading, fontSize: 30 }]}>Verifying Phone Numbers</Text>
                </View>
                <View style={{ gap: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Enter your OTP</Text>
                    <Text style={styles.para}>Enter the 6-digit code sent via SMS to: {phoneNumber}</Text>
                    <InputFieldShadow input={<Input
                        value={code}
                        onChangeText={setCode}
                        // inputStyle={{ borderBottomWidth: 1,borderBottomColor:'red' }}
                        // rightIcon={<Icon name="close" size={20} onPress={() => clearInputFieldHandler(setEmail)} />}
                        placeholder="code"
                        errorStyle={{ color: 'red' }}
                        errorMessage={isError ? 'ENTER A VALID ERROR HERE' : null}
                        style={{ width: '50%', fontSize: 20 }}
                        keyboardType='number-pad'
                        maxLength={6}
                    />} />
                    <Text style={styles.para}>Didn't receive the code? {'counter'}</Text>
                </View>

                <MainButton title="Continue" />

            </ScrollView >
        </View>
    )
}

export default PhoneVerification;

