/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../colors';

const SearchTabBarIcon = ({ children, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
        }}
    >
        <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </View>
    </TouchableOpacity>

);

export default SearchTabBarIcon;
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})