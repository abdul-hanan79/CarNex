/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../colors';


const HeaderIconText = ({ title, Navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={
                () => console.warn("open drawer")
                // Navigation.openDrawer()
            }>
                <FontAwesomeIcon icon={faUserCircle} size={36} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#ffff'
        // justifyContent:'center',
    },
    icon: {
        marginRight: 18,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.heading,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default HeaderIconText;
