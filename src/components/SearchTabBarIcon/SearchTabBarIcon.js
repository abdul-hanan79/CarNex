/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchTabBarIcon = ({ children, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#e32f45' }}>
            {children}
        </View>
    </TouchableOpacity>

);

export default SearchTabBarIcon;
